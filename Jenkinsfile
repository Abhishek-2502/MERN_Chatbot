pipeline {
    agent { label 'mern_chatbot' }

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Abhishek-2502/MERN_Chatbot', branch: 'AWS_Deploy'
            }
        }

        stage('Build & Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }

        stage('Clean Docker System (Optional)') {
            steps {
                sh 'docker system prune -f --volumes'
            }
        }
    }

    post {
        always {
            echo "✅ Full stack build & deploy complete."
        }
    }
}
