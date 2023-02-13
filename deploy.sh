# name = "taijinfming"
# echo '----------------开始-----------------'
# git add .
# echo 'git add .'
# echo '--------------请输入commit 信息-------'
# read msg
# echo "您输入的commit 信息： ${msg}"
# git commit -m "${msg}"
# echo '--------------请输入tag 信息----------'
# read tag
# echo "您输入的tag: ${tag}"
# git tag -a "${tag}" -m "${msg}"
# git push
git add .
read msg
git commit -m msg
git push