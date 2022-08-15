# Hello world React-Rails

This is a simple React-Rails application, using React for frontend and Rails for backend with postgresql. It generate a rendom greeting and send it to the Api then render it in the browser.

## Table of Contents

- [Built with](#built-with)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Contributing](#🤝-contributing)

## Built With

- [Ruby](https://www.ruby-lang.org/)
- [Rails](https://rubygems.org/gems/rails)
- [Postgresql](https://www.postgresql.org/)

## Prerequisites

For using the app you can use the Demo link above to see the app in action, no further prerequisites are needed.

## Developments

You should have `ruby on rails` and `postgresql` installed and running on your machine in adition to the `react-rails` gem before you can start developing this app.

### Getting Started

To start using this software you need to have Ruby installed in your machine
Then clone this repo:

```
-$ git clone git@github.com:Ismailco/Hello-world-Rreact_rails.git
```

```
-$ cd Hello-world-Rreact_rails
```

Then install the gems:

```
-$ bundle install
```

```
-$ rake db:create db:migrate
```

```
-$ yarn install
```

If you got an error 'The asset "application.js" is not in the asset pipeline' you need to run

```
-$ yarn add react react-dom react-router-dom
```

Then run the server:

```
-$ rails server
```

or

```
-$ ./bin/dev
```

Then open the browser to http://localhost:3000/

Then visit the URL:

```
-$ http://localhost:3000
```

To run rspec, in your terminal for testing the methods:

```
-$ rspec
```

## Authors

👤 **Ismail Courr**

- GitHub: [@ismailco](https://github.com/ismailco)
- Twitter: [@ismailcourr](https://twitter.com/ismailcourr)
- LinkedIn: [Ismail courr](https://www.linkedin.com/in/ismailcourr)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
