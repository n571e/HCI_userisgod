import xml.etree.ElementTree as ET
import datetime

# Data Structure
mindmap_data = {
    "title": "Social-RAG",
    "children": [
        {
            "title": "Problem Context",
            "children": [
                {"title": "AI Agents need social awareness"},
                {"title": "Existing: Rigid templates, no context"},
                {"title": "Goal: Social Grounding"},
                {"title": "Gap: Sociotechnical gap"}
            ]
        },
        {
            "title": "Core Concept",
            "children": [
                {"title": "Social Knowledge Base\n(from Interaction History)"},
                {"title": "Social Facts vs Factual Knowledge"},
                {"title": "Implicit Signals (Reactions, Replies)"}
            ]
        },
        {
            "title": "Workflow (4 Steps)",
            "children": [
                {
                    "title": "1. Collect & Index",
                    "children": [
                        {"title": "Parse History"},
                        {"title": "Extract Items (e.g. Papers)"},
                        {"title": "Index Metadata & Members"}
                    ]
                },
                {
                    "title": "2. Retrieve Signals",
                    "children": [
                        {"title": "Prior Posts (Similar topics)"},
                        {"title": "Relevant Metadata (Authors)"},
                        {"title": "Relevant Members (Interest)"}
                    ]
                },
                {
                    "title": "3. Rank & Generate",
                    "children": [
                        {"title": "LLM Synthesis"},
                        {"title": "Contextual Explanation"},
                        {"title": "Succinct & Neutral"}
                    ]
                },
                {
                    "title": "4. Post & Learn",
                    "children": [
                        {"title": "Post to Channel"},
                        {"title": "Collect Reactions/Replies"},
                        {"title": "Update Knowledge Base"}
                    ]
                }
            ]
        },
        {
            "title": "Implementation: PaperPing",
            "children": [
                {"title": "Domain: Academic Paper Recs"},
                {"title": "Platform: Slack Bot"},
                {"title": "Tech: Node.js + GPT-4 + Semantic Scholar"},
                {"title": "Design Inspo: Formative Studies\n(Preference for neutral/short)"}
            ]
        },
        {
            "title": "Field Evaluation",
            "children": [
                {"title": "3 Months, 18 Channels"},
                {"title": "Findings", "children": [
                    {"title": "Effective Contextualization"},
                    {"title": "Fosters Common Ground"},
                    {"title": "Low User Effort"},
                    {"title": "Non-disruptive"}
                ]}
            ]
        },
        {
            "title": "Discussion",
            "children": [
                {"title": "Levels of Grounding\n(Category -> Group -> Individual)"},
                {"title": "Group vs Individual Preferences"},
                {"title": "Privacy & Transparency"}
            ]
        }
    ]
}

# Drawing Helpers
def create_mxfile():
    mxfile = ET.Element("mxfile", host="Electron", modified=datetime.datetime.now().isoformat(), agent="Antigravity", version="21.6.8", type="device")
    diagram = ET.SubElement(mxfile, "diagram", id="diagram_1", name="Page-1")
    graph_model = ET.SubElement(diagram, "mxGraphModel", dx="1000", dy="1000", grid="1", gridSize="10", guides="1", tooltips="1", connect="1", arrows="1", fold="1", page="1", pageScale="1", pageWidth="1600", pageHeight="1200", math="0", shadow="0")
    root = ET.SubElement(graph_model, "root")
    ET.SubElement(root, "mxCell", id="0")
    ET.SubElement(root, "mxCell", id="1", parent="0")
    return mxfile, root

def create_node(root, id, value, x, y, width=120, height=60, style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;"):
    cell = ET.SubElement(root, "mxCell", id=str(id), value=value, style=style, parent="1", vertex="1")
    geometry = ET.SubElement(cell, "mxGeometry", x=str(x), y=str(y), width=str(width), height=str(height))
    geometry.set("as", "geometry")
    return id

def create_edge(root, id, source, target):
    style = "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
    cell = ET.SubElement(root, "mxCell", id=str(id), parent="1", style=style, source=str(source), target=str(target), edge="1")
    geometry = ET.SubElement(cell, "mxGeometry", relative="1")
    geometry.set("as", "geometry")
    return id

current_id = 2

def layout_tree(node, root_xml, x, y):
    global current_id
    my_id = current_id
    current_id += 1
    
    # Simple sizing
    width = 140
    height = 60
    gap_x = 100
    gap_y = 20
    
    # Calculate subtree height to center parent
    def get_subtree_height(n):
        if "children" not in n or not n["children"]:
            return height
        h = 0
        for child in n["children"]:
            h += get_subtree_height(child) + gap_y
        return h - gap_y

    subtree_h = get_subtree_height(node)
    
    # Draw current node
    style = "rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;"
    if x == 100: # Root style
        style = "rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=14"
    elif "children" in node and node["children"]: # Branch style
        style = "rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;"
        
    create_node(root_xml, my_id, node["title"], x, y + subtree_h/2 - height/2, width, height, style)
    
    child_y = y
    if "children" in node:
        for child in node["children"]:
            child_h = get_subtree_height(child)
            child_id = layout_tree(child, root_xml, x + width + gap_x, child_y)
            
            # Connect
            edge_id = current_id
            current_id += 1
            create_edge(root_xml, edge_id, my_id, child_id)
            
            child_y += child_h + gap_y
            
    return my_id

mxfile, root_xml = create_mxfile()
layout_tree(mindmap_data, root_xml, 100, 100)

tree = ET.ElementTree(mxfile)
tree.write("/Users/taw/project/class/human-computer/experiment/github/HCI_userisgod/class_report/Social_RAG_Mind_Map.drawio", encoding="UTF-8", xml_declaration=True)
print("Drawio file generated successfully.")
