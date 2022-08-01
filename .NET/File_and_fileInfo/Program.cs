using static System.Console;

WriteLine("Digite o nome do arquivo:");
var nome = ReadLine();


nome = LimparNome(nome);

static string LimparNome(string nome)
{
    foreach (var @char in Path.GetInvalidFileNameChars())
    {
        nome = nome.Replace(@char, '-');
    }
    return nome;
};
//var path = Environment.CurrentDirectory + "\\teste.txt"; // ou 
var path = Path.Combine(Environment.CurrentDirectory, $"{nome}.txt");

//File.Create(path);// Criar arquivo
CriarArquivo(path);

WriteLine("Digite enter para terminar...");
ReadLine();

static void CriarArquivo(string path)
{
    try
    {
        using var sw = File.CreateText(path);
        sw.WriteLine("Está é a linha 1 do arquivo");
        sw.WriteLine("Está é a linha 2 do arquivo");
        sw.WriteLine("Está é a linha 3 do arquivo");
        //sw.Flush(); //se for utilizado using não é necessário o flush()
    }
    catch
    {

        WriteLine("O nome do arquivo está inválido!");
    }


}