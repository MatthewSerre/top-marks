# Top Marks

Top Marks is a bookmark application consisting of a back-end API written in Ruby on Rails and a front-end interface written in React/Redux.  Check out a [live demo](https://top-marks-bookmarks.herokuapp.com/).

[![top-marks-demo](http://img.youtube.com/vi/upHCLaNS6BU/0.jpg)](http://www.youtube.com/watch?v=upHCLaNS6BU "Top Marks Demo")

## Prerequisites/Installation

1. Install and configure PostgreSQL
1. Clone the repository
1. Switch to the main directory of the repo
1. Run `bundle install` or similar
1. Run `rails db:create` and `rails db:migrate`; `rails db:seed` is optional depending on whether you want to test with the data included in `db/seeds.rb`
1. Run `rails s` to start the back-end
1. Run `yarn run build`
1. Switch to the `top-marks` subdirectory and run `yarn run start`

## Feedback

If you have any feedback or want to contribute, then feel free to reach out to me and/or open an issue/pull request.
