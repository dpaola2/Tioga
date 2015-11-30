module ApplicationHelper
  def webpack_bundle_tag(bundle)
    src =
      if Rails.configuration.webpack[:use_manifest]
        manifest = Rails.configuration.webpack[:asset_manifest]
        filename = manifest[bundle]

        filename
      else
        "bundle"
      end

    javascript_include_tag(src)
  end

  def webpack_manifest_script
    return '' unless Rails.configuration.webpack[:use_manifest]
    javascript_tag "window.webpackManifest = #{Rails.configuration.webpack[:asset_manifest].to_json}"
  end
end
