# require "rubygems"

# desc "Deploy to Github Pages"
# task :deploy do
#   puts "## Deploying to Github Pages"

#   puts "## Generating site"
#   system "grunt build"

#   cd "_site" do
#     system "git add -A"

#     message = "Site updated at #{Time.now.utc}"
#     puts "## Commiting: #{message}"
#     system "git commit -m \"#{message}\""

#     puts "## Pushing generated site"
#     system "git push"

#     puts "## Deploy Complete!"
#   end
# end

require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
  "source"      => ".",
  "destination" => "_site"
  })).process
end


desc "Generate and publish blog to master"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "grunt build"
    system "mv _site/* #{tmp}"
    system "git checkout -B master"
    system "rm -rf *"
    system "mv #{tmp}/* ."
    message = "Site updated at #{Time.now.utc}"
    system "git add ."
    system "git commit -am #{message.shellescape}"
    system "git push origin master --force"
    system "git checkout source"
    system "echo yolo"
  end
end

task :default => :publish