# Tioga

Tioga is a web app for [Bullet Journaling](http://bulletjournal.com).

Demo: [tioga.davezor.net](http://tioga.davezor.net).

## Problems? Issues?

If you encounter a bug or any other issue, please feel free to file a github issue.


## Contributing

Pull requests are welcome!

# Getting Started

Backend:

- Ruby 2.1.0
- Rails 4.1.12

Frontend:

- [Webpack](https://webpack.github.io/)
- [React](https://facebook.github.io/react/)
- [JSData](http://www.js-data.io/)

## Installation

1. Install rvm: https://rvm.io/
1. Install ruby: `rvm install 2.1.7`
1. Install bundler: `gem install bundler`
1. Install postgres: `brew install postgresql`
1. Install backend dependencies: `bundle install`
1. Install node: `brew install node`
1. Install frontend dependencies: `npm install .`
1. Load the schema: `bin/rake db:schema:load`
1. Install foreman: `gem install foreman`
1. Run the server: `bin/foreman start`
1. View the running site at http://localhost:5000


## Docker dev setup (optional)

If you would rather use docker than the system postgres, you can follow these
instructions. They assume you're already somewhat familiar with docker; if you
aren't, you may want to just use the system postgres.

1. Set up docker and a docker-machine (https://docs.docker.com/engine/installation/mac/)
1. Install docker-compose if you haven't already: `brew install docker-compose`
1. Start postgres: `docker-compose start`
1. Put the following in `config/database.yml`

   ```yml
    development:
      url: postgres://postgres:postgres@<%= `docker-machine ip dev-docker`.strip %>:<%= `docker-compose port postgres 5432`.partition(':')[2].chomp %>/postgres?pool=5
    ```

All rails and rake commands will now apply to your docker postgres.

# Credits

@dpaola2

# License

This software is released under the NCSA Public License.


