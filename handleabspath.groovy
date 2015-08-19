import groovy.io.FileType


def startTime = System.currentTimeMillis()
def pattern = ~/=\"\/[^\/].*?\.(?:html|jpg|png)/
def dir = new File("docs/")
def count = 0
def fileCounts = 0
dir.traverse(type: FileType.FILES, nameFilter: ~/.*\.html/) {
    def matcher = pattern.matcher(it.text)
    def fileText = it.text
    matcher.each { m ->
            count++
        def absPath = "docs" + (m - "=\"")
        //def relPath = "./pathtool -relative ${it.path} ${absPath}".execute().text.trim()
        def relPath = calcRelative(it.path, absPath)
//        println it.path + ":" + absPath + ":" + relPath
        fileText = fileText.replaceAll(m, "=\"" + relPath)
    }
    if (matcher.getCount() > 0) {
        it.write(fileText)
        print "."
        fileCounts++
    }
}

def spendTime = (System.currentTimeMillis() - startTime) / 1000.0f
println "Files: ${fileCounts}  Count:${count} Spend:${spendTime}s"

def calcRelative(String from, String to) {
    String[] source = from.split("/");
    String[] target = to.split("/"); // keep in mind that the arrays are of different length!
    StringBuilder uniquePart = new StringBuilder();
    StringBuilder relativePart = new StringBuilder();
    boolean stillSame = true;
    int sourceL = source.length - 1
    int targetL = target.length - 1
    for(int ii = 0; ii < source.length - 1 || ii < target.length; ii++) {
        if(ii < targetL && ii < sourceL && 
                stillSame && source[ii].equals(target[ii])) continue;
        stillSame = false;
        if(target.length > ii)
          uniquePart.append("/").append(target[ii]);
        if(source.length > ii +1)
            relativePart.append("../");
    }

    if (uniquePart.charAt(0) == "/") {
        uniquePart.deleteCharAt(0)
    }
    return relativePart.append(uniquePart.toString()).toString();
}
