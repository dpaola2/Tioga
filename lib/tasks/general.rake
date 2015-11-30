# Add webpack to run after normal asset compilation
Rake::Task['assets:precompile'].clear_prerequisites.enhance(["webpack:compile"])

namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    Rake::Task["assets:environment"].invoke
    
    cmd = "webpack --config #{Rails.root}/config/webpack/production.config.js"
    output = `#{cmd}`
    puts output
  end
end
