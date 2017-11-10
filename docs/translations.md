# Übersetzungen

Vielen Dank für dein Interesse an der Übersetzung der Leitfäden!

## Eine Übersetzung starten

Bevor du anfängst an einer Übersetzung zu arbeiten, schaue dir die [Offenen Übersetzungsanfragen](https://github.com/github/opensource.guide/labels/translation) an, um zu sehen, ob jemand anderes bereits an einer Übersetzung für deine Sprache arbeitet.

Wenn nicht, dann ist heute dein Tag um diese Aufgabe zu übernehmen! So startest du:

1. [Eine Abzweigung dieses Repository erstellen](https://github.com/github/opensource.guide/fork)
1. Öffne eine Anfrage mit [dieser Vorlage](templates/translation-issue-template.md)
1. Beginne mit der Durchsicht der Checkliste!

## Eine Übersetzung aktuell halten

Git ist ziemlich gut im Tracking von Dateien, die sich verändert haben. Wir werden versuchen es dir so einfach wie möglich zu machen deine Übersetzung auf dem neuesten Stand zu halten.

Hinweis: In diesen Anweisungen wird davon ausgegangen, dass der `Ursprung`[remote](https://git-scm.com/docs/git-remote) die Übersetzungs-Abzweigung ist. Wenn du das Repository ursprünglich nicht aus der Abzweigung geklont hast, kannst du es mit `git remote set-url origin https://github.com/[deinname]/opensource.guide.git` aktualisieren.

Hier ist die empfohlene Vorgehensweise:

1. Führe `$script/sync-translation` aus, um die letzten Änderungen aus dem Upstream zusammenzuführen und eine Pull-Anforderung für Ihre Abzweigung zu öffnen.
1. Wenn Dateien, die übersetzt werden müssen, geändert wurden, werden sie zu einer Prüfliste in der Pull-Anforderung hinzugefügt.
1. Nachdem alle Dateien aktualisiert wurden, führe die Pull-Anforderung zusammen.

Führe dieses Skript so oft aus, wie du möchtest, um deine Übersetzung auf dem neuesten Stand zu halten.
