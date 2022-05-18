pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs('NodeJS') {
          sh 'npm install;'
        }

      }
    }

    stage('sca') {
      steps {
        dependencyCheck(odcInstallation: 'depency-check')
      }
    }

  }
}