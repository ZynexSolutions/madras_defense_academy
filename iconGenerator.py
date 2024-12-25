import os

fileNames = []

for i in os.listdir("./assets/icons"):
    if i.endswith(".svg"):
        
        fileNames.append(i)

print(fileNames)

with open("./components/utils/IconLists.ts", "w") as fs:
    fs.write("export type IconNameKeyType = ")

    st = []
    for i in range(len(fileNames)):
        st.append( f"'{fileNames[i].replace('.svg', '')}'")

    fs.write(" | ".join(st))
    fs.write("\n")
    fs.write("\n")

    fs.write("export const IconMap: Record<IconNameKeyType, string> = {\n")
    for i in range(len(fileNames)):
        fs.write(f"  '{fileNames[i].replace('.svg', '')}': require('../../assets/icons/{fileNames[i]}'),\n")

    fs.write("}\n")