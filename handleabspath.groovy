import groovy.io.FileType


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
        def relPath = "./pathtool -relative ${it.path} ${absPath}".execute().text.trim()
//        println it.path + ":" + absPath + ":" + relPath
        fileText = fileText.replaceAll(m, "=\"" + relPath)
    }
    if (matcher.getCount() > 0) {
        it.write(fileText)
        print "."
        fileCounts++
    }
}
println "Files: ${fileCounts}  Count:${count}"
