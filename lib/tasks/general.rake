# Add webpack to run after normal asset compilation
Rake::Task['assets:precompile'].enhance do
  Rake::Task["webpack:compile"].invoke
end
