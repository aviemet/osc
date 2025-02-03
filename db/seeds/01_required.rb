# rubocop:disable Style/SoleNestedConditional
if !Rails.env.test?
  if Screen.count == 0
    Screen.create title: "Main"
  end
end
# rubocop:enable Style/SoleNestedConditional
