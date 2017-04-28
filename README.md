# Node.js backend app generator with docker virtualization
Standard directory structure for node.js application

# Use guide
One cloned, change origin to point to your new git location so future updates will be pushed to your repo.
```
git remote -v origin git@github.com:USERNAME/REPOSITORY.git 
```

# Development Duide
To build project into a docker image
```
make build
```

To run application from built image
```
make run
```

To in development mode: useful to test when modifying code, no need to rebuild docker image everytime
```
make run-dev
```

To run test
```
make test
```

# Directories Structure
><b>./config</b>
*this directory contains configuration files*<br>
><b>./design</b>
*Design and additional details on development*<br>
><b>./docker</b>
*docker virtualization files*<br>
><b>./src</b>
*source codes*
>><b>./routes </b>
*express route files*<br>
>><b>./handlers</b>
*core logic to process routes, *<br>
>><b>./interfaces</b>
*adapters that communicate to remote services*<br>
>><b>./models</b>
*data management*<br>
>><b>./utilities</b>
*utility functions*</br>
>
><b>./test</b>
*test directory*
>
>><b>./fixtures</b>
*test fixtures*</br>
>><b>./unit_tests</b>
*unit test files*<br>
>><b>./integraton_tests</b>
*integration test files*<br>



