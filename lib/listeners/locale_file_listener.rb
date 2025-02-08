module Listeners
  class LocaleFileListener
    def self.start
      return unless Rails.env.development?

      locale_path = Rails.root.join("config/locales")

      listener = Listen.to(locale_path, only: /\.yml$/) do |modified, added, removed|
        if (modified + added + removed).any?
          puts "\n[i18n] Detected changes in locale files. Running i18n export..."
          Rake::Task["i18n:export"].invoke
          # Reset the task so it can be run again
          Rake::Task["i18n:export"].reenable
          puts "[i18n] Export completed.\n"
        end
      end

      Thread.new do
        listener.start
        sleep
      rescue StandardError => e
        Rails.logger.error "[i18n] File watcher error: #{e.message}"
      end

      at_exit do
        listener.stop
      end
    end
  end
end
