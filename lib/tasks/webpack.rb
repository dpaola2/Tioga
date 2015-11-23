namespace :assets do
  task :precompile_assets do
    run_locally do
      with rails_env: fetch(:stage) do
        execute 'rm -rf public/assets'
        execute :bundle, 'exec rake assets:precompile'
        execute :bundle, 'exec rake webpack:compile'
      end
    end
  end
end

namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    cmd = 'webpack --config config/webpack/production.config.js --json'
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open('./public/assets/webpack-asset-manifest.json', 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end
  end
end
end
