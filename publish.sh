#!/usr/bin/env bash
#"postbuild": "echo '******构建成功,将构建的内容发布到build-dev分支下*****' && chmod +x publish.sh && ./publish.sh"

cd dist
echo $1

#构建代码不能放入打包的代码中
if [ x"$1" == x"" -o "$1" == "dev" -o "$1" == "master" -o "$1" == "test" -o "$1" == "simulate" ]; then
    echo "代码分支,不要构建"
    exit -1
fi

echo "##### clean git"
rm -rf .git

echo "##### 初始化git"
git init
git add .
git commit -m "update at `date` "
git remote add origin git@github.com:liuchungui/AngularWebpack.git >> /dev/null 2>&1

echo "##### push到$1分之"
git branch $1
git checkout $1
git push origin $1 -f

echo "##### $1 发布完成"