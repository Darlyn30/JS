# Cuaderno de comandos de Git y GitHub

- Git
- GitHub

# **Comandos de Git**

## **Comandos básicos**

- **git init**: inicializa un nuevo repositorio de Git.
- **git add**: agrega cambios al área de preparación.
- **git commit**: guarda los cambios en el repositorio.
- **git status**: muestra el estado actual del repositorio.
- **git log**: muestra un registro de los commits realizados en el repositorio.
- **git diff**: muestra las diferencias entre dos commits o entre el área de preparación y el repositorio.

## **Comandos para trabajar con branches**

- **git branch**: muestra la lista de branches y permite crear, renombrar y borrar branches.
- **git checkout**: cambia al branch especificado.
- **git merge**: combina dos branches.

## **Comandos para trabajar con repositorios remotos**

- **git remote**: muestra la lista de repositorios remotos y permite agregar, renombrar y borrar repositorios remotos.
- **git fetch**: descarga cambios del repositorio remoto a tu repositorio local.
- **git pull**: descarga cambios del repositorio remoto a tu repositorio local y los combina con tu rama actual.
- **git push**: envía cambios desde tu repositorio local al repositorio remoto.

## **Comandos para trabajar con branches**

- **git branch -d <nombre-branch>**: elimina el branch especificado.
- **git branch -m <nombre-branch-actual> <nombre-branch-nuevo>**: renombra el branch especificado.
- **git checkout -b <nombre-branch>**: crea un nuevo branch y cambia a él.
- **git merge --no-ff <nombre-branch>**: combina el branch especificado en el branch actual, manteniendo el historial de commits del branch.

## **Comandos para trabajar con el área de preparación**

- **git reset**: elimina los cambios del área de preparación, sin perder los cambios realizados en el directorio de trabajo.
- **git reset --hard**: elimina los cambios del área de preparación y del directorio de trabajo.
- **git commit --amend**: modifica el commit anterior.

## **Comandos para trabajar con repositorios remotos**

- **git remote add <nombre-remoto> <URL>**: agrega un nuevo repositorio remoto al repositorio local.
- **git remote -v**: muestra la lista de repositorios remotos y las URLs asociadas.
- **git push --force**: envía cambios forzadamente al repositorio remoto, sobrescribiendo los cambios existentes en el mismo.
- **git pull --rebase**: descarga los cambios del repositorio remoto y los aplica a la rama local, reorganizando los commits locales para que estén en la parte superior del historial.

---

# **Comandos de GitHub**

## **Comandos básicos**

- **gh repo create**: crea un nuevo repositorio en GitHub.
- **gh issue**: muestra la lista de issues y permite crear, actualizar y cerrar issues.
- **gh pr**: muestra la lista de pull requests y permite crear, actualizar y cerrar pull requests.
- **gh release**: muestra la lista de releases y permite crear y eliminar releases.

## **Comandos para trabajar con repositorios**

- **gh repo clone**: clona un repositorio de GitHub en tu computadora.
- **gh repo fork**: crea un fork de un repositorio en tu cuenta de GitHub.
- **gh repo view**: muestra la página de un repositorio en tu navegador web.

## **Comandos para trabajar con tu cuenta de GitHub**

- **gh auth login**: inicia sesión en GitHub con tu cuenta.
- **gh config set**: configura opciones de tu cuenta de GitHub, como tu nombre y tu correo electrónico.
- **gh alias set**: configura alias para comandos de gh.

## **Comandos para trabajar con repositorios**

- **gh repo clone <nombre-usuario>/<nombre-repo>**: clona un repositorio en tu computadora.
- **gh repo fork <nombre-usuario>/<nombre-repo>**: crea un fork de un repositorio en tu cuenta de GitHub.
- **gh repo rename <nombre-repo-nuevo>**: renombra el repositorio actual en tu cuenta de GitHub.
- **gh repo delete**: elimina el repositorio actual en tu cuenta de GitHub.

## **Comandos para trabajar con issues y pull requests**

- **gh issue list**: muestra la lista de issues abiertos en el repositorio actual.
- **gh issue create**: crea un nuevo issue en el repositorio actual
- **gh issue status**: muestra el estado actual de los issues en el repositorio.
- **gh issue close <numero-issue>**: cierra el issue especificado.
- **gh issue reopen <numero-issue>**: reabre el issue especificado.
- **gh pr list**: muestra la lista de pull requests abiertos en el repositorio actual.
- **gh pr create**: crea un nuevo pull request en el repositorio actual.

## **Comandos para trabajar con tu cuenta de GitHub**

- **gh auth logout**: cierra sesión en GitHub.
- **gh config get**: muestra la configuración actual de tu cuenta de GitHub.
- **gh alias set**: configura alias para comandos de gh.

## **Comandos para trabajar con ramas y pull requests**

- **gh pr checkout <numero-pull-request>**: cambia al branch correspondiente al pull request especificado.
- **gh pr merge <numero-pull-request>**: fusiona el pull request especificado en el branch base.
- **gh pr diff <numero-pull-request>**: muestra las diferencias entre el pull request y el branch base.