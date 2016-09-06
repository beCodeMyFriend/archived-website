require "jekyll-import";

JekyllImport::Importers::WordPress.run({
  "dbname"   => "becode",
  "user"     => "root",
  "password" => "",
  "host"     => "localhost",
  # "socket"   => "",
  "table_prefix"   => "wp_",
  "site_prefix"    => "",
  "clean_entities" => true,
  "comments"       => true,
  "categories"     => true,
  "tags"           => true,
  "more_excerpt"   => true,
  "more_anchor"    => true,
  "extension"      => "html",
  "status"         => ["publish"]
})
