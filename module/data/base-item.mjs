import a5eDataModel from "./base-model.mjs";

export default class a5eItemBase extends a5eDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}