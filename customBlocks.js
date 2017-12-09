
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['rupose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Rupauls' Look")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "ruIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}


Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updatePose('+dropdown_catindex+');';
    return blockCode;
};

Blockly.JavaScript['rupose'] = function(block) {
    var dropdown_ruindex = block.getFieldValue('ruIndex');
    var blockCode = 'updateRuPose('+dropdown_ruindex+');';
    return blockCode;
};

Blockly.Blocks['Print'] = {
  init: function() {
    this.appendValueInput("whatever")
        .setCheck("String")
        .appendField("Insert Text Here;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};;

Blockly.JavaScript['Print'] = function(block) {
  var value_whatever = Blockly.JavaScript.valueToCode(block, 'whatever', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'updateText('+value_whatever+');';
  return code;
};;
