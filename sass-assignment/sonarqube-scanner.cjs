const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "squ_90d020fc82defb2d1c05ad5ef0c83e1219009584",
        options: {
            'sonar.projectName': 'sass-assignment',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'sass-assignment',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login':'admin',
            'sonar.password':'baqthiar@21',
            'sonar.sources':"src/pages"
        }
    },
    () => process.exit()
)