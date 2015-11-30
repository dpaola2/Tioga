# Add webpack to run after normal asset compilation
Rake::Task['assets:precompile'].clear_prerequisites.enhance(["webpack:compile"])

namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    Rake::Task["assets:environment"].invoke
    
    cmd = "webpack --json --config #{Rails.root}/config/webpack/production.config.js"
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open("#{Rails.root}/public/assets/webpack-asset-manifest.json", 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end
  end
end
