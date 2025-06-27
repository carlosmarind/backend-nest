pipeline {
    agent any // This specifies that the pipeline can run on any available agent
    stages { // Define the stages of the pipeline
        stage('Build') { // Stage for building the application  
            steps {
                sh 'echo hola a todos desde el pipeline' // Shell command to build the application
            },
        stage('Compile') { // Stage for compiling the application
            steps {
                echo 'Compiling...'
            }
        }
        stage('Test') { // Stage for testing the application
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') { // Stage for deploying the application
            steps {
                echo 'Deploying...' 
            }
        }
    }
    post {
        always {
            echo 'This will always run after the stages complete.'
        }
        success {
            echo 'This will run only if the pipeline succeeds.'
        }
        failure {
            echo 'This will run only if the pipeline fails.'
        }
        unstable {
            echo 'This will run if the pipeline is marked as unstable.'
        
        }
        changed {
            echo 'This will run if the pipeline status has changed since the last run.'
        }
    }
    environment {
        MY_ENV_VAR = 'Hello, World!' // Define an environment variable      
}
