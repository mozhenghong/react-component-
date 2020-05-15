#!/bin/env bash
# 运行sh ./doc.sh, 然后在github中setting下的GitHub Pages 中的网址后加/example.html即可预览网站
yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m"update"
git push
git push --set-upstream origin gh-pages
git checkout master