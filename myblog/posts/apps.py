from django.apps import AppConfig
from django.conf import settings


class PostsConfig(AppConfig):
    name = 'posts'

    def ready(self):
        from django.core.checks import Error, register

        @register()
        def check_conn(app_configs, **kwargs):
            errors = []
            check_failed = True
            checked_object = ''

            import subprocess
            import time

            def check_db_not_running(comm):
                command = subprocess.Popen(comm, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                command.wait()
                stdout, stderr = command.communicate()
                return 'no server running' in str(stdout)

            if settings.DEBUG:
                comm = ["pg_ctl", "status", "-D", settings.PDATA]
                if check_db_not_running(comm):
                    comm_launch = ["postgres", "-D", settings.PDATA]
                    process = subprocess.Popen(comm_launch, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                    time.sleep(1)
                    print(process.pid)

                if check_db_not_running(comm):
                    print('not working')
                else:
                    print('database launched!')
                    check_failed = False

            if check_failed:
                errors.append(
                    Error(
                        'an error',
                        hint='Connection error',
                        obj=checked_object,
                        id='post.appconfig.ready',
                    )
                )
            return errors
