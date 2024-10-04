require 'rails/generators/rails/scaffold/scaffold_generator'

module Rails
  module Generators
    class ScaffoldGenerator
      def add_serializer
        invoke "serializer", [name.singularize]
      end

      def add_policy
        invoke "pundit:policy", [name.singularize]
      end
    end
  end
end
