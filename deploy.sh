#grab deployment.yaml file and find what image we're working with!
#grab the versionNumber that is the tag that we'll increase by 1 and then we'll use to rebuild 
#the docker image then push to the new gcr.io container registry.
file="./deployment.yaml"
imageString=$(grep 'gcr' $file)
appName=$(grep -m 1 'name:' $file)
appName=${appName//'name: '/}
newVersionNumber="$(( $(echo "${imageString: -1}" ) + 1))";


