module Admin
  class Settings::SmtpsController < ApplicationController
    expose :smtps, -> { @active_company.smtps }
    expose :smtp

    # GET /settings/mail
    def index
      render inertia: "Settings/Mail/Index", props: {
        smtps: smtps.render
      }
    end

    # GET /settings/mail/:id
    def show
      render inertia: "Settings/Mail/Show", props: {
        smtp: smtp.render
      }
    end

    # GET /settings/mail/new
    def new
      render inertia: "Settings/Mail/New", props: {
        smtp: Smtp.new({ security: 'tls' }).render(view: :form_data)
      }
    end

    # GET /settings/mail/:id/edit
    def edit
      render inertia: "Settings/Mail/Edit", props: {
        smtp: smtp.render(view: :form_data)
      }
    end

    # POST /settings/mail
    def create
      smtp.company = @active_company
      if smtp.save
        redirect_to settings_smtp_url(smtp), notice: 'Mail acccount successfully created'
      else
        redirect_to new_settings_mail_path, inertia: { errors: smtp.errors }
      end
    end

    # PUT /settings/mail/:id
    def update
      if smtp.update(smtp_params)
        redirect_to settings_smtp_url(smtp), notice: 'Mail acccount successfully updated'
      else
        redirect_to edit_settings_mail_path, inertia: { errors: smtp.errors }
      end
    end

    # DELETE /settings/mail/:id
    def destroy
    end

    private

    def smtp_params
      params.require(:smtp).permit(:name, :host, :domain, :port, :security, :username, :password, :address, :notes)
    end

  end
end
