# Add webpack to run after normal asset compilation
Rake::Task['assets:precompile'].enhance do
  Rake::Task["webpack:compile"].invoke
end

namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    cmd = 'webpack --json --config #{Rails.root}/config/webpack/production.config.js'
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open("#{Rails.root}/public/assets/webpack-asset-manifest.json", 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end
  end
end
