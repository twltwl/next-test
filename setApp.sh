#!/usr/bin/env sh

rm -rf pages
ln -s "apps/$APP/views/" pages
echo 'app is now: ' + $APP