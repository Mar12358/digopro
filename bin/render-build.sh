#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
npm install 
yarn install --ignore-engines
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:create
bundle exec rake db:migrate RAILS_ENV=test
bundle exec rake db:migrate
bundle exec rake rswag:specs:swaggerize
