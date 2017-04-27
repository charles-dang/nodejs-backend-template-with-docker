# Node.js backend app generator with docker virtualization
Standard directory structure for node.js application

# Use guide
git remote -v origin git@github.com:USERNAME/REPOSITORY.git 

# Development Duide
To build project into a docker image
```
make build
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



