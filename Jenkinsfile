pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            nodejs('NodeJS') {
              sh 'npm install;'
            }

          }
        }

        stage('sca') {
          steps {
            dependencyCheck()
          }
        }

      }
    }

  }
}