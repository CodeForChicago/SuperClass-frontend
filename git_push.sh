git status
# prompt for user input
git checkout dist/js/app.js
echo "Do you wish to add these files?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) make install; break;;
        No ) exit;;
    esac
done
git add -A
git status
# prompt for user input for commit message
git commit -m $message
git push origin master
