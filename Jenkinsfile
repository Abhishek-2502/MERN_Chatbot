pipeline {
    agent { label 'mern_chatbot' }

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
        ENV_PATH = '/home/ubuntu/chatserver.env' // path on your EC2 instance
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Inject .env') {
            steps {
                echo 'Copying .env into chatserver folder...'
                sh '''
                    cp $ENV_PATH chatserver/.env
                    ls -la chatserver/
                '''
            }
        }

        stage('Pre-Build Cleanup') {
            steps {
                echo 'Pruning unused Docker resources before build...'
                sh '''
                    docker-compose down --remove-orphans
                    docker system prune -f --volumes
                '''
            }
        }

        stage('Build and Deploy') {
            steps {
                echo 'Building and starting Docker containers...'
                sh '''
                    docker-compose build --no-cache
                    docker-compose up -d
                '''
            }
        }
    }

    post {
        always {
            echo 'Build and deployment process finished.'
            sh 'docker-compose ps'
        }
    }
}
