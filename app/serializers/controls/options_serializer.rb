class Controls::OptionsSerializer < ControlSerializer
  attributes(
    :id,
    :title,
    :order,
    :min_value,
    :max_value,
    :value,
    :color,
    :screen_id,
    :protocol_id,
    :command_id,
    control_type: { type: :string },
  )
end
