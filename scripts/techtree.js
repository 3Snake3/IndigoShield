const blocks = require("blocks/blocks");
const turrets = require("blocks/turrets");

const creostone = Vars.content.getByName(ContentType.item, "adc-creostone"); 
const globium = Vars.content.getByName(ContentType.item, "adc-globium"); 

const newNode = (parent, content, req, objectives) => {
var parnode = TechTree.get(parent);
var node = new TechTree.TechNode(parnode, content, req != null ? req : content.researchRequirements());
var used = new ObjectSet();
if(objectives != null){
node.objectives.addAll(objectives);
}
}
newNode(Blocks.parallax, turrets.impaler, ItemStack.with(Items.titanium, 7500, Items.silicon, 6900, Items.plastanium, 4450, Items.phaseFabric, 2000), Seq.with(new Objectives.SectorComplete(SectorPresets.impact0078)));
newNode(Blocks.ripple, turrets.warhead, ItemStack.with(Items.lead, 8600, Items.graphite, 6400, Items.silicon, 2300, items.creostone, 1800, Items.plastanium, 1300), Seq.with(new Objectives.SectorComplete(SectorPresets.extractionOutpost), new Objectives.Research(Blocks.spectre)));
newNode(Blocks.meltdown, turrets.needle, ItemStack.with(creostone, 10000, Items.silicon, 7000, Items.plastanium, 5400, Items.titanium, 4800), Seq.with(new Objectives.SectorComplete(SectorPresets.desolateRift), new Objectives.Research(Blocks.overdriveDome)));
newNode(Blocks.cryofluidMixer, blocks.multi, ItemStack.with(Items.lead, 1800, Items.graphite, 1000, Items.silicon, 1200), Seq.with(new Objectives.SectorComplete(SectorPresets.craters)));
newNode(blocks.graphiteW, blocks.graphiteWT, ItemStack.with(Items.graphite, 3500, Items.silicon, 1200), Seq.with(new Objectives.Research(Blocks.lancer)));
newNode(blocks.coalW, blocks.coalWT, ItemStack.with(Items.coal, 3500, Items.silicon, 1200), Seq.with(new Objectives.Research(Blocks.fuse)));
newNode(blocks.siliconW, blocks.siliconWT, ItemStack.with(Items.silicon, 3500, items.creostone, 1200), Seq.with(new Objectives.Research(Blocks.swarwer)));