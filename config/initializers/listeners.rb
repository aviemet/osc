Rails.application.config.after_initialize do
  Listeners::LocaleFileListener.start
end
