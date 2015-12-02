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

Make sure you have postgres installed, create your database (I call mine tioga_development) and add it to config/database.yml:


- Install rvm: https://rvm.io/
- Install ruby: `rvm install 2.1.7`
- Install bundler: `gem install bundler`
- Install postgres: `brew install postgresql`
- Create your database: `createdb tioga_development`
- Add credentials to `config/database.yml`:

```yaml
development:
  adapter:  postgresql
  host:     localhost
  encoding: unicode
  database: tioga_development
  pool:     5
  username: admin
  password:
```

- Install backend dependencies: `bundle install`
- Install node: `brew install node`
- Install frontend dependencies: `npm install .`
- Load the schema: `bin/rake db:schema:load`
- Install foreman: `gem install foreman`
- Run the server: `bin/foreman start`
- View the running site at http://localhost:5000


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


