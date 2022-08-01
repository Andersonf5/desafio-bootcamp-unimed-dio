CriarDiretorioGlobo();
CriarArquivo();

var origem = Path.Combine(Environment.CurrentDirectory, "brasil.txt");
var destino = Path.Combine(Environment.CurrentDirectory, "globo","America do Sul","Brasil","brasil.txt");


static void MoverArquivo(string OriginalPath, string destinoPath){
    File.Move(OriginalPath, destinoPath);
}

MoverArquivo(origem,destino);

static void CriarArquivo()
{
    var path = Path.Combine(Environment.CurrentDirectory, "brasil.txt");
    if (!File.Exists(path))
    {
        using var sw = File.CreateText(path);
        sw.Write("População: 213 MIlhões");
        sw.WriteLine("IDH: 0,901");
        sw.WriteLine("dadod atualizados em : 20/04/2018");
    }

}
    static void CriarDiretorioGlobo()
    {
        var path = Path.Combine(Environment.CurrentDirectory, "globo");
        if (!Directory.Exists(path))
        {
            var dirGlobo = Directory.CreateDirectory(path);

            var dirAmNorte = dirGlobo.CreateSubdirectory("America do norte");
            var dirAmCentral = dirGlobo.CreateSubdirectory("America Central");
            var dirAmSul = dirGlobo.CreateSubdirectory("America do Sul");

            dirAmNorte.CreateSubdirectory("USA");
            dirAmNorte.CreateSubdirectory("Mexico");
            dirAmNorte.CreateSubdirectory("Canada");

            dirAmCentral.CreateSubdirectory("Costa Rica");
            dirAmCentral.CreateSubdirectory("Panama");

            dirAmSul.CreateSubdirectory("Brasil");
            dirAmSul.CreateSubdirectory("Argentina");
            dirAmSul.CreateSubdirectory("Paraguai");
        }
    }



