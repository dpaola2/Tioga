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

- Webpack
- React
- JSData

## Installation

1. Install ruby: `rvm install 2.1.0`
2. Install bundler: `gem install bundler`
3. Install postgres: `brew install postgresql`
4. Install backend dependencies: `bundle install`
5. Install npm: `brew install npm`
6. Install frontend dependencies: `npm install`
7. Load the schema: `bin/rake db:schema:load`
8. Install foreman: `gem install foreman`
9. Run the server: `bin/foreman start`


## Docker dev setup (optional)

If you would rather use docker than the system postgres, you can follow these
instructions. They assume you're already somewhat familiar with docker; if you
aren't, you may want to just use the system docker.

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


