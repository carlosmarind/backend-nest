pipeline {

    agent any

    //escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
        dockerImagePrefix = "us-west1-docker.pkg.dev/lab-agibiz/docker-repository"
        registry = "https://us-west1-docker.pkg.dev"
        registryCredentials = 'gcp-registry'
    }
    stages {

        stage ("saludo a usuario"){
            steps{
                sh 'echo "hola atodos"'
            }
        }
        stage ("saludo a usuario prueba"){
            steps{
                sh 'echo "hola a prueba"'
            }
        }
        stage ("proceso build y test"){
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages {
                stage ("instalación de dependencias") {
                    steps {
                        sh 'npm ci'
                    }
                }
                stage ("ejecución de pruebas"){
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                stage ("ejecución de la aplicacion"){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage ("build y push de imagen docker") {
            steps {
                script {
                    docker.withRegistry("${registry}", registryCredentials) {
                    sh "docker build -t backend-nest-aer ."
                    sh "docker tag backend-nest-aer ${dockerImagePrefix}/backend-nest-aer"
                    sh "docker push ${dockerImagePrefix}/backend-nest-aer"
                    }  
                }
            }
        }
    }
}