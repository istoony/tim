-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 20, 2016 alle 08:55
-- Versione del server: 5.6.29-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_guidoantoniomatteo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `assistenza`
--

CREATE TABLE IF NOT EXISTS `assistenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `descrizione` text NOT NULL,
  `sottocategoria` int(11) DEFAULT NULL,
  `evidenza` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sottocategoria` (`sottocategoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dump dei dati per la tabella `assistenza`
--

INSERT INTO `assistenza` (`id`, `nome`, `descrizione`, `sottocategoria`, `evidenza`) VALUES
(1, 'Attivazione linea di casa', 'Richiedere l''attivazione di una linea telefonica di casa è molto semplice, puoi:<br/><ul><li>richiederla online</li><li>chiamare il Servizio Clienti linea fissa 187</li><li>recarti presso un Negozio TIM.</li><li>Verifica la modalità di attivazione consultando on line le varie offerte disponibili.</li></ul><br/>I dati necessari sono:<br/><ul><li>nome e cognome</li><li>codice fiscale</li><li>indirizzo dell''abitazione per cui richiedi l''installazione della linea</li><li>un recapito telefonico di cellulare</li><li>indirizzo email (facoltativo).</li><ul>Il nostro personale tecnico ti contatterà quanto prima per concordare l''appuntamento per l''installazione dell’impianto telefonico.', 5, 1),
(2, 'Trasloco', 'Il trasloco è un''operazione che ti consente di spostare la tua linea telefonica presso una nuova abitazione, nella stessa città o in una città diversa. Puoi gestirla direttamente online basta registrarsi all’Area Clienti.', 5, 0),
(8, 'Subentro', 'Il subentro ti permette di modificare l intestazione di una linea telefonica attiva nella stessa sede dove si trova l impianto garantendo così la continuità nell emissione delle fatture.', 5, 1),
(9, 'PIN e PUK', 'Tutte le informazioni per gestire i codici di sicurezza PIN e PUK e per sapere cosa fare in caso di blocco della tua SIM.', 6, 0),
(10, 'Passaggio da Abbonamento a Ricaricabile', 'Per passare la tua utenza TIM da abbonamento a servizio ricaricabile puoi compilare il modulo di “Richiesta di migrazione da abbonamento a ricaricabile”. Il modulo è disponibile in formato pdf nella sezione Moduli e può essere scaricato direttamente dalla sottosezione “clienti con abbonamento”.<br/>Potrai inviare il modulo compilato con la richiesta di cessazione del contratto di abbonamento e la specificata volontà di passare verso servizio ricaricabile (indicando il profilo e l''eventuale opzione) e la modalità di rimborso ACI (assegno/accredito su linea ricaricabile), al numero di fax dedicato 800600119.<br/>Puoi effettuare il passaggio scrivendoci o in alternativa presso un qualsiasi Negozio TIM.', 6, 1),
(11, 'MyTIM Fisso - gestione Linea', 'Scopri come registrarti alla nostra Area Clienti per gestire online la tua linea, la fattura e tutti i servizi compresi.', 7, 0),
(12, 'Come registrarsi su MyTim Fisso', 'Scopri come registrarti alla nostra Area Clienti per gestire online la tua linea, la fattura e tutti i servizi compresi.', 7, 1),
(13, 'Come leggere la fattura della linea fissa', 'La fattura della linea fissa è semplice e facile da leggere perché disegnata prendendo spunto dai suggerimenti dei clienti. La veste grafica, moderna e raffinata, utilizza un linguaggio sempre più chiaro per l’esposizione delle voci di spesa, facilitando la lettura di tutte le informazioni di cui hai bisogno e garantendo maggiore trasparenza nei contenuti e negli importi.', 9, 0),
(14, 'Richiedere un rimborso', 'Se hai effettuato un pagamento non dovuto o se hai diritto alla restituzione dell’anticipo conversazioni interurbane puoi richiederne il rimborso.', 9, 0),
(15, 'Conto Online: cosa cambia dal 1° febbraio 2016', 'A partire dal 1° febbraio 2016, è cambiata la disciplina delle modalità di fatturazione per i clienti ADSL e Fibra per incentivare l’utilizzo del servizio gratuito di ricezione on line della fattura in formato esclusivamente elettronico.<br/>AI clienti ADSL e Fibra che hanno attiva la domiciliazione bancaria o postale e che abbiano un indirizzo di posta elettronica associata al Servizio (@alice.it o @tim.it), verrà attivato in automatico il servizio di ricezione delle fatture in formato esclusivamente elettronico (Conto Online).<br/>Tale servizio consiste nella notifica via mail della possibilità di visualizzare la fattura nella sezione MyTIM Fisso del sito tim.it e dunque nell’eliminazione della fattura cartacea e dei relativi costi.<br/>Per tutti i clienti che non hanno la domiciliazione attiva, che non hanno un indirizzo e-mail associato al servizio, o che hanno scelto di non aderire al Conto Online, verrà mantenuto l’invio della fattura cartacea. Per questi clienti sarà addebitato un importo mensile di 2 euro IVA inclusa, comprensivo delle spese di spedizione.', 9, 0),
(16, 'Verifica credito residuo e bonus disponibili per i clienti Prepagati', 'Scopri come consultare le informazioni relative al credito residuo, alle offerte e ai bonus attivi sulla tua linea.', 10, 0),
(17, 'Dettaglio delle chiamate per clienti ricaricabili', 'Con il servizio di documentazione traffico puoi conoscere il dettaglio di ogni telefonata, connessione dati o altro evento effettuato dalla tua linea con l’indicazione della data/ora di effettuazione, del costo, della tipologia, del numero chiamato e se si tratti di traffico voce o SMS. Consulta il dettaglio delle tue chiamate direttamente online da MyTIM Mobile.', 10, 0),
(18, 'Soglia di protezione e blocco del traffico dati', 'Con TIM puoi proteggere la tua spesa mensile per navigare su internet con il telefonino, tablet  o chiavetta. Scopri inoltre, come fare per bloccare il traffico dati nel caso in cui tu voglia inibire il servizio sulla tua linea.', 10, 0),
(19, 'MyTIM Fisso (controllo costi)', 'Registrandoti a MyTIM Fisso o scaricando l’Applicazione per smartphone e tablet avrai a disposizione tutte le informazioni relative alla tua linea di casa.<br/> Potrai visualizzare i servizi e le offerte attive sulla tua linea telefonica, pagare le tue fatture e avere informazioni relative al traffico.', 11, 0),
(20, 'Verifica online il tuo traffico', 'Scopri come verificare online il tuo traffico telefonico in modo semplice e veloce e conoscere il dettaglio dei consumi ad esso relativi.<br/>Accedendo alla sezione MyTIM Mobile del nostro sito è possibile verificare il dettaglio dei consumi relativi al traffico effettuato.', 11, 0),
(21, 'Tim Smart', 'Fai una scelta SMART !  A casa e fuori casa.<br/> Navighi senza limiti ad alta velocità, risparmi senza rinunce, telefoni e navighi senza sorprese.', 8, 0),
(22, 'Assistenza tecnica specializzata con SOSsmartphone', 'Con il servizio di TIM SOSsmartphone  puoi ricevere un’assistenza tecnica specializzata e personalizzata per la gestione del tuo smartphone o tablet.', 12, 0),
(25, 'Buono sconto per cambio telefono', 'Con il servizio TIM Valuta puoi far valutare gratuitamente e senza impegno il tuo telefonino, smartphone o tablet. Ricevi subito uno sconto da utilizzare per l’acquisto di un nuovo telefonino, smartphone, tablet, chiavetta, Internet Pack, oppure in Ricarica telefonica TIM.', 12, 1),
(26, 'Apri una segnalazione', 'Con tre semplici passi e in completa autonomia puoi segnalare un problema all’Assistenza Tecnica.<br/>1. Inserisci il numero di telefono sul quale richiedere assistenza<br/>2. Seleziona il tipo di problema riscontrato<br/>3. Invia il Form on Line', 13, 0),
(27, 'Verifica una segnalazione', 'Dopo aver aperto una segnalazione all’Assistenza Tecnica, puoi controllarne lo stato di avanzamento direttamente dal PC, dallo smartphone o dal tablet.<br/>1. Inserisci il numero di telefono sul quale hai segnalato un problema<br/>2. Controlla lo stato della segnalazione e verifica i dettagli<br/>3. Leggi le comunicazioni e aggiorna la tua<br/>4. richiesta di assistenza in base alle tue esigenze<br/>', 13, 0),
(28, 'Gestione Posta', 'Per accedere ai tuoi messaggi clicca su POSTA IN ARRIVO  nel menu in alto della tua webmail o dall’indicazione dei messaggi da leggere nella pagina principale di TIM Mail.<br/>I messaggi ricevuti vengono memorizzati automaticamente nella cartella Posta in arrivo della tua webmail. I messaggi ancora da leggere vengono visualizzati con carattere grassetto ed è possibile personalizzare la visualizzazione dei messaggi modificando l''ordine e l''anteprima. Per scrivere un nuovo messaggio clicca sul tasto Scrivi .', 14, 0),
(29, 'Registrazione', 'Per registrare una casella di posta TIM Mail è necessario avere un abbonamento  ADSL o Fibra di TIM  o essere cliente TIM Mobile.<br/>Ti ricordiamo che per utilizzare i servizi previsti dalla tua offerta ADSL o Fibra di TIM è necessario registrare la casella di posta associata al tuo abbonamento. Per procedere alla registrazione vai su http://mail.alice.it e clicca su Registrati all''interno del box di login:', 14, 1),
(30, 'Cos''è TIM games', 'TIMgames è servizio TIM edicato al gaming che consente a tutti i clienti di scaricare su tablet e smartphone i migliori giochi on demand e in abbonamento per il mondo mobile.<br/>Con TIMgames avrai a disposizione una library di oltre 1500 giochi, aggiornata ogni settimana con nuovi titoli e giochi in offerta presenti nell’area promozioni dello store.<br/>TIMgames èaccessibile sia da App (scaricabile da Google Play) che da browser su www.timgames.it L’utente può scegliere la modalità di acquisto preferita tra on demand e abbonamento.', 15, 0),
(31, 'Conoscere l’App TIMgames', 'Navigare e scegliere i giochi preferiti all’interno di TIMgames è semplice e intuitivo.<br/>All’interno della Home Page, in alto, troverai gli abbonamenti disponibili per il tuo telefonino. Scorrendo la pagina verso il basso, avrai a disposizione tutti i giochi on demand. All’intero della sezione “prova gratis”, potrai inoltre provare tutti i giochi vuoi prima di acquistarli.', 15, 0),
(32, 'Cos''è TIMmusic', 'TIMmusic è la piattaforma di musica digitale di Telecomitalia dedicata a tutti i clienti che hanno uno smartphone/tablet TIM o una linea ADSL o Fibra  residenziale Telecom Italia o una chiavetta Internet TIM.<br/>Con TIMmusic puoi ascoltare milioni di brani in streaming senza limiti di tempo sul tuo smartphone e tablet o sul PC (clienti ADSL e Fibra Residenziale Telecom Italia o con chiavetta Internet TIM). Puoi  creare tue playlist personali o ascoltare quelle suggerite da dj e artisti famosi e condividere tutto sui principali social network. Il catalogo è sempre aggiornato con tutte le ultime uscite discografiche, spesso anche in anteprima esclusiva. E , se sei su mobile, non consumi GB perchè il traffico dati per l’ascolto di musica è incluso nel costo dell’abbonamento.', 16, 0),
(33, 'Tutti i modi per acquistare', 'Se sei un cliente TIM puoi attivare l’abbonamento per Smarthone e Tablet direttamente nella sezione “Abbonamento” della App. Per iOS occorre accedere dallo smartphone o  tablet a timmusic.it.<br/>Si puo’ attivare TIMmusic anche presso i negozi TIM, chiamando il 40916 (seguendo la voce guida) o da tim.it (anche per chiavetta TIM).<br/>Se sei un cliente con una linea ADSL o Fibra  residenziale Telecom Italia puoi attivare l’Abbonamento TIMmusic per fruirne su PC, da  sito timmusic.it,  dal sito tim.it oppure chiamando il 187.\r\n\r\n', 16, 0),
(34, 'Cos’è TIMreading', 'TIMreading è lo Store di TIM che permette di acquistare e leggere eBook, quotidiani e Magazine su PC, Tablet e Smartphone.<br/>I contenuti disponibili sullo store sono:<br/>-11 quotidiani nazionali e sportivi, completi di allegati ed edizioni locali, disponibili in abbonamento settimanale o mensile sul proprio PC, Tablet o Smartphone, per seguire l’informazione dalle prime ore del mattino<br/>-oltre 50 Magazine in copia singola o in abbonamento, per scoprire le nuove tendenze e nuove mete, seguire i gossip e l’attualità<br/>-oltre 75.000 eBook tra best seller, gialli, romanzi rosa, classici e tanto altro, per passare il tempo leggendo un buon libro.<br/>Puoi attivare diverse offerte per scoprire il servizio TIMreading:<br/>- abbonamenti a quotidiani e abbonamenti o copie singole di magazine dal sito TIMreading<br/>- presso i Negozi TIM o sul sito TIM l’abbonamento ad un quotidiano a partire da 15,99€/mese, con i primi 3 mesi gratis o l’abbonamento “I Love Mags” per scegliere ogni mese le riviste che preferisci.<br/>-presso i Negozi TIM l’abbonamento ad una rivista a partire da 10,99€/mese e hai un secondo abbonamento a scelta in regalo<br/>ogni eBook ha il proprio prezzo ed ogni giorno su TIMreading almeno un libro è offerto con oltre il 60% di sconto.', 17, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `assistenzadispositivi`
--

CREATE TABLE IF NOT EXISTS `assistenzadispositivi` (
  `iddispositivo` int(11) NOT NULL,
  `idassistenza` int(11) NOT NULL,
  PRIMARY KEY (`iddispositivo`,`idassistenza`),
  KEY `idassistenza` (`idassistenza`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `assistenzadispositivi`
--

INSERT INTO `assistenzadispositivi` (`iddispositivo`, `idassistenza`) VALUES
(1, 1),
(2, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `attivazione`
--

CREATE TABLE IF NOT EXISTS `attivazione` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `attivazione`
--

INSERT INTO `attivazione` (`id`, `descrizione`) VALUES
(1, 'Solo online.'),
(2, 'In tutti i negozi TIM.'),
(3, 'Online e in tutti i negozi TIM.');

-- --------------------------------------------------------

--
-- Struttura della tabella `categorieassistenza`
--

CREATE TABLE IF NOT EXISTS `categorieassistenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `foto` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `categorieassistenza`
--

INSERT INTO `categorieassistenza` (`id`, `nome`, `foto`) VALUES
(1, 'Gestione Linea', 'http://guidoantoniomatteo.altervista.org/tim/img/as/gestionelinea.png'),
(2, 'Costi Pagamenti', 'http://guidoantoniomatteo.altervista.org/tim/img/as/costipagamenti.png'),
(3, 'Supporto', 'http://guidoantoniomatteo.altervista.org/tim/img/as/supportotecnico.png'),
(4, 'Smart Life', 'http://guidoantoniomatteo.altervista.org/tim/img/as/smartlife.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `categoriedevice`
--

CREATE TABLE IF NOT EXISTS `categoriedevice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `foto` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `categoriedevice`
--

INSERT INTO `categoriedevice` (`id`, `nome`, `foto`) VALUES
(1, 'Smartphone', 'smartphone.png'),
(2, 'Tablet & Pc', 'tablet.png'),
(3, 'Modem', 'modem.png'),
(4, 'TV & Smart', 'tv.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `categoriepiani`
--

CREATE TABLE IF NOT EXISTS `categoriepiani` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `fotogrande` varchar(1024) NOT NULL,
  `foto` varchar(1024) NOT NULL,
  `descrizione` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `categoriepiani`
--

INSERT INTO `categoriepiani` (`id`, `nome`, `fotogrande`, `foto`, `descrizione`) VALUES
(1, 'Mobile', 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobile-grande.jpg', 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobile.png', 'La gamma per la tua linea mobile, con i migliori contenuti inclusi'),
(2, 'Fisso', '', 'http://guidoantoniomatteo.altervista.org/tim/img/piani/fisso.png', ''),
(3, 'Mobile e Fisso', '', 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobilefisso.png', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `categoriesmartlife`
--

CREATE TABLE IF NOT EXISTS `categoriesmartlife` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `categoriesmartlife`
--

INSERT INTO `categoriesmartlife` (`id`, `nome`) VALUES
(1, 'BENESSERE'),
(2, 'FAMIGLIA'),
(3, 'SERVIZI'),
(4, 'TV & FUN');

-- --------------------------------------------------------

--
-- Struttura della tabella `descrizionepiano`
--

CREATE TABLE IF NOT EXISTS `descrizionepiano` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` text NOT NULL,
  `piano` int(11) NOT NULL,
  `titolo` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `piano` (`piano`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `descrizionepiano`
--

INSERT INTO `descrizionepiano` (`id`, `descrizione`, `piano`, `titolo`) VALUES
(1, 'TIM Special Voce ha un costo di 10&euro; ogni 4 settimane.\n\nPer chi passa a TIM mantenendo il proprio numero o attiva una nuova linea, il costo di attivazione dell''offerta è di 3&euro;. Solo online il costo di attivazione e le prime 4 settimane sono gratis. Per i già clienti TIM è previsto un costo di attivazione di 19&euro;.\n\nL’offerta è a tempo indeterminato con addebito del costo e rinnovo dei servizi ogni 28 giorni. Il rinnovo dell’offerta avviene entro massimo 4 ore dalla mezzanotte della data di scadenza e sarà confermato con un SMS. Si può comunque verificare l’attivazione dell’ offerta e/o opzione, i successivi rinnovi, la disponibilità dei servizi inclusi e il traffico residuo chiamando il numero gratuito 40916, accedendo alla sezione MyTIM Mobile del sito o contattando il Servizio Clienti 119. Le eventuali chiamate prima del  rinnovo dell’offerta sono tariffate secondo il piano tariffario base.\n\nPer le offerte che prevedono rinnovi su credito residuo: affinché l’offerta si rinnovi è necessario che il giorno del rinnovo dell’offerta la TIM Card disponga di un credito telefonico sufficiente a coprire il costo stesso del rinnovo. Qualora il credito sulla TIM Card sia inferiore al costo previsto, viene utilizzato il credito disponibile al momento dell''addebito; l’offerta resta attiva, ma non sarà possibile effettuare chiamate in uscita, inviare SMS o navigare in Internet. La parte residua del costo del rinnovo ancora da saldare sarà detratta automaticamente in occasione della prima ricarica sufficiente a coprirla. Se la ricarica non viene effettuata entro i 30 giorni dalla data del parziale o mancato pagamento del costo del rinnovo, sarà avviato il processo di cessazione dell’offerta.\n\nL’addebito del costo dell''offerta TIM Special Voce può avvenire mediante utilizzo del credito residuo presente sulla TIM Card, mediante bonus accreditati sulla TIM Card attraverso sconti e/o promozioni, tramite pagamento con carta di credito solo dei circuiti Visa, Mastercard, Amex con esclusione delle carte prepagate, e tramite addebito su conto corrente bancario o postale.', 1, 'Costi'),
(2, 'Puoi attivare l''offerta su credito residuo:<br/>\r\n\r\ndirettamente online cliccando sul tasto ATTIVA. Per scoprire i vantaggi e le modalità dell’attivazione online, consulta la Guida<br/>\r\npresso i Negozi TIM<br/>\r\nchiamando gratuitamente il numero 40916\r\ninviando un SMS gratuito al 119 con testo libero “TIM SPECIAL VOCE”\r\nchiamando il 119 e seguendo le fonie del risponditore automatico\r\n<br/>\r\nPuoi attivare l''offerta su carta di credito, solo per clienti già TIM:\r\n<br/>\r\ndirettamente online cliccando sul tasto ATTIVA. Per scoprire i vantaggi e le modalità dell’attivazione online, consulta la Guida\r\npresso i Negozi TIM\r\n<br/>\r\nPuoi attivare l’offerta con addebito su conto corrente bancario o postale:\r\n<br/>\r\npresso i Negozi TIM', 1, 'Come si attiva'),
(3, 'Con TIM Special Start chiami e navighi alla velocità della luce grazie al 4G di TIM, tutto in un’unica soluzione.\r\n<br/>\r\nE quest’estate raddoppi Giga e minuti (fino al 30/09/2016) e hai TIMmusic incluso per 6 mesi.\r\n<br/>\r\nScegli la comodità dell’addebito su carta di credito o conto corrente: il raddoppio di Giga e minuti è senza scadenza!\r\n<br/>\r\nLe chiamate incluse nell’offerta TIM Special Start sono conteggiate sugli effettivi secondi di conversazione e sono senza scatto alla risposta.\r\n<br/>\r\nPuoi attivare TIM Special Start con il raddoppio di Giga e minuti entro il 28/08/2016.\r\n<br/>\r\nPer tutti i dettagli vai alla sezione “TIM ricorda”.', 2, 'Offerta'),
(4, 'TIM Young Junior è l’offerta pensata per le esigenze di genitori e ragazzi. A soli 8€/4 settimane tuo figlio parla, naviga e gioca con TIMgames Junior e tu sei tranquillo grazie al servizio TIM Protect.<br/>E se scegli la comodità dell’addebito su carta di credito o conto corrente, per te 1GB di Internet 4G, invece di 500MB, e attivazione gratuita!<br/>Il costo di attivazione è di 3 &euro;.<br/>Solo online il costo di attivazione e le prime 4 settimane sono gratuite. Online è previsto l''acquisto di una TIM Card al costo di 15 € con 10 € di traffico incluso.<br/>L’offerta è attivabile soltanto su nuove linee TIM ricaricabili. Il servizio TIM Protect, incluso nell’offerta TIM Young Junior, è l’esclusivo servizio TIM che ti permette di salvaguardare la navigazione Internet di tuo figlio. Per informazioni aggiuntive su TIM Protect consulta il link www.timyoung.it.<br/>TIMgames Junior è il servizio di TIM dedicato ai giochi. Puoi accedere da Rete mobile al sito www.timgames.it/junior e scegliere i giochi disponibili senza costi aggiuntivi. TIMgames Junior è incluso nell’offerta TIM Young Junior.<br/>Attiva TIM Young Junior con addebito automatico su carta di credito o conto corrente bancario e ricevi fino a 100 &euro di sconto sull''acquisto di tanti modelli di Smartphone. Per maggiori dettagli su modelli e altro ancora clicca qui (link sito young smartphone).', 3, 'Costi');

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositivicorrelati`
--

CREATE TABLE IF NOT EXISTS `dispositivicorrelati` (
  `iddispositivo` int(11) NOT NULL,
  `iddispositivocorrelato` int(11) NOT NULL,
  PRIMARY KEY (`iddispositivo`,`iddispositivocorrelato`),
  KEY `iddispositicocorrelato` (`iddispositivocorrelato`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `dispositivicorrelati`
--

INSERT INTO `dispositivicorrelati` (`iddispositivo`, `iddispositivocorrelato`) VALUES
(2, 1),
(3, 1),
(4, 1),
(1, 2),
(3, 2),
(5, 2),
(2, 3),
(1, 4),
(2, 5),
(7, 6),
(10, 6),
(6, 7),
(10, 7),
(6, 10),
(7, 10);

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositividescrizione`
--

CREATE TABLE IF NOT EXISTS `dispositividescrizione` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titolo` varchar(500) NOT NULL,
  `descrizione` text NOT NULL,
  `path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dump dei dati per la tabella `dispositividescrizione`
--

INSERT INTO `dispositividescrizione` (`id`, `titolo`, `descrizione`, `path`) VALUES
(1, '22GB gratis per 30 giorni Internet 4G LTE!', 'Acquista o regala uno Smartphone 4G commercializzato da TIM: hai inclusi per i primi 30 giorni 22GB di Internet alla velocità del 4G, tanti MMS, minuti alla segreteria telefonica e spazio su TIM Cloud!<br/>\r\nAlla scadenza dei 30 giorni, solo per i clienti TIM ricaricabili in assenza di altre offerte Internet attive, si continua a navigare con 1GB al mese a 5€ mese alla velocità del 4G. La promozione termina alla scadenza dei 30 giorni, per i clienti TIM ricaricabili con altre offerte internet attive e per i clienti TIM con abbonamento. Un messaggio SMS ti avviserà sia della cessazione della promozione, che dell’eventuale proseguimento a pagamento.<br/>\r\nPromozione valida fino al 31/10/2016', 'http://guidoantoniomatteo.altervista.org/tim/img/device/promozioni/4g.png'),
(2, 'TIM Card con 5 euro di traffico prepagato incluso', 'Acquista on line un telefonino, una chiavetta o un modem e avrai, compresa nella confezione, una TIM Card del valore di 5&euro; (IVA incl.) con 1&euro; di traffico prepagato incluso e 4&euro; di costo di attivazione. <br/>Ti ricordiamo che per attivare la tua nuova linea ricaricabile è necessario provvedere alla registrazione dei tuoi dati anagrafici.', 'http://guidoantoniomatteo.altervista.org/tim/img/device/promozioni/sim-card.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositivisupiano`
--

CREATE TABLE IF NOT EXISTS `dispositivisupiano` (
  `iddispositivo` int(11) NOT NULL,
  `idpiano` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `dispositivisupiano`
--

INSERT INTO `dispositivisupiano` (`iddispositivo`, `idpiano`) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3),
(4, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositivo`
--

CREATE TABLE IF NOT EXISTS `dispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `descrizione` text NOT NULL,
  `id_marca` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `prezzo` varchar(50) DEFAULT NULL,
  `prezzoscontato` varchar(50) DEFAULT NULL,
  `specifiche` text NOT NULL,
  `display` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dump dei dati per la tabella `dispositivo`
--

INSERT INTO `dispositivo` (`id`, `nome`, `descrizione`, `id_marca`, `id_categoria`, `prezzo`, `prezzoscontato`, `specifiche`, `display`) VALUES
(1, 'Galaxy S7', '<lu><li>Sistema Operativo Android 5.0</li>\n<li>Display 5.1”</li>\n<li>Processore OctaCore (QuadCore 2.1 Ghz + QuadCore 1.5 Ghz)</li></ul>', 1, 1, '500&euro;', NULL, '                        <div class="row specifiche">\n                            <div class="col-md-12">\n                            <p>Galaxy S7 ha un secondo display sempre attivo tramite il quale accedere alle app più utilizzate, rispondere alle chiamate, controllare ora, data, batteria, notifiche e altro, o semplicemente riprodurre musica.<br/>Galaxy S7 è dotato di un processore QuadCore da 1.2GHz con 2GB di RAM, 16GB di memoria interna, connettività LTE, batteria da 2300 mAh e fotocamera anteriore da 8MP e posteriore da 13MP.</p>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Dimensioni</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>142,6x71,8x7,1 mm</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Batteria</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>Capacità: 2900 mAh</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Connettività</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>Usb 2.0 / Bluetooth 4.1 Low Energy</li>\n                                            <li>802.11 a/b/n 2.4+5Ghz, HT40</li>\n                                            <li>NFC / Android Beam</li>\n                                            <li>Connettore auricolare da 3.5 mm</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Fotocamera</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>13 Mpx AF con FlashLED, Zoom digitale 4x, OIS , F1.9 (fotocamera posteriore)</li>\n                                            <li>5 Mpx, F1.9 (fotocamera anteriore)</li>\n                                            <li>Autoscatto, Selfie panoramico, Panoramica, Scatto multiplo, HDR, Notte, Modalità aggiuntive scaricabili</li>\n                                            <li>Foto: 4128 x 3096, 4128 x 2322, 3096 x 3096, 3264 x 2448, 3264 x 1836, 2048 x 1152</li>\n                                            <li>Registrazione Video: 1920 x 1080, 1280 x 720, 640 x 480</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Memoria</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>16 GB interna (espandibile fino a 128 GB)</li>\n                                            <li>2 GB (RAM)</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>', 5),
(2, 'Galaxy J5 (2016)', '<ul>\n<li>Sistema Operativo Android 5.1</li>\n<li>Display 5.2” 16 Milioni colori Touch</li>\n<li>Processore QuadCore 1.2 Ghz</li>', 1, 1, '300&euro;', '269&euro;', 'Nessuna descrizione', 4),
(3, 'Nokia Lumia 830', '<ul><li>Display 4.5” 16 milioni colori Touch</li><li>Sistema Operativo Windows Phone 8</li><li>Fotocamera 8.7 Megapixel con Flash</li></ul>', 2, 1, '299&euro;', '199&euro;', '                   <div class="row specifiche">\n                            <div class="col-md-12">\n                            <p>Display 4.5” 16 milioni colori Touch - Sistema Operativo Windows -  Phone 8 - Fotocamera 8.7 Megapixel con Flash</p>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Dimensioni</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>129 x 70,6 x 8,5 mm</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Batteria</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>Capacità: 1900 mAh</li>\n                                            <li>Stand by: fino a 432 ore - Conversazione: fino a 1098 minuti</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Connettività</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>Bluetooth - Wi-Fi - Micro USB</li>\n                                            <li>802.11 a/b/n 2.4+5Ghz, HT40</li>\n                                            <li>Connettore auricolare da 3.5 mm</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12 line">\n                                <div class="row">\n                                    <div class="col-xs-4 left">\n                                        <h3>Fotocamera</h3>\n                                    </div>\n                                    <div class="col-xs-8 right">\n                                        <ul>\n                                            <li>8.7 Mpixel/Flash</li>\n                                            <li>5 Mpx, F1.9 (fotocamera anteriore)</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>', 6),
(4, 'New K8 Plus (2016)', '<ul><li>4G LTE - NFC</li>\r\n<li>Sistema Operativo Android 6</li>\r\n<li>Display 5''''</li>\r\n<li>Processore QuadCore 1.3 GHz</li></ul>', 3, 1, '179,90 &euro;', '129,90 &euro;', 'Nessuna descrizione', 5),
(5, 'iPhone SE 16GB', '<ul><li>Display Retina da 4'''' con risoluzione di 1136x640 pixel" HD</li><li>Chip A9 con architettura a 64 bit</li>Fotocamera iSight da 12MP con Focus Pixels e flash True Tone</li></ul>', 4, 1, '500 &euro;', NULL, 'Nessuna descrizione', 5),
(6, 'Smart TV 50" + Soundbar', '<ul><li>Modello 50JU6400 - 50“</li><li>Ultra HD - 4K 3840 x 2160</li><li>Soundbar HW-J250 inclusa</li></ul>', 1, 4, '650 &euro;', NULL, 'Nessuna descrizione', 50),
(7, 'Gear 360 (2016)', '<ul><li>Modello DRIMe5s</li><li>Registrazione a 360° in 4K</li><li>DUAL CMOS 15MP sensor</li></ul>', 1, 4, '299&euro;', NULL, '', 1),
(8, 'D7000', '<ul><li>Modello Nighthawk - Modem Router ADSL/VDSL</li><li>802.11ac Dual Band Gigabit</li><li>2,4GHz e 5 GHz</li></ul>', 5, 3, '299&euro;', NULL, '', 0),
(9, 'Archer VR2600', '<ul><li>Modem Router Wireless Gigabit VDSL/ADSL</li><li>802.11ac Dual Band Gigabit</li><li>DSL, EWAN e USB</li></ul>', 6, 3, '199&euro;', NULL, '', 0),
(10, 'TV OLED VIERA', '<ul><li>TV Oled 4K</li><li>Smart Tv</li><li>HDR reality</li></ul>', 7, 4, '1999&euro;', NULL, '', 60);

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositivofoto`
--

CREATE TABLE IF NOT EXISTS `dispositivofoto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(1500) NOT NULL,
  `id_dispositivo` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dump dei dati per la tabella `dispositivofoto`
--

INSERT INTO `dispositivofoto` (`id`, `path`, `id_dispositivo`) VALUES
(1, 'http://guidoantoniomatteo.altervista.org/tim/img/device/S7/s7-1.png', 1),
(2, 'http://guidoantoniomatteo.altervista.org/tim/img/device/S7/s7-2.jpg', 1),
(3, 'http://guidoantoniomatteo.altervista.org/tim/img/device/J5/j5-1.png', 2),
(4, 'http://guidoantoniomatteo.altervista.org/tim/img/device/J5/j5-2.png', 2),
(5, 'http://guidoantoniomatteo.altervista.org/tim/img/device/LUMIA830/830-1.png', 3),
(6, 'http://guidoantoniomatteo.altervista.org/tim/img/device/LUMIA830/830-2.png', 3),
(7, 'http://guidoantoniomatteo.altervista.org//tim/img/device/K8/k8-1.jpg', 4),
(8, 'http://guidoantoniomatteo.altervista.org//tim/img/device/K8/k8-2.jpg', 4),
(9, 'http://guidoantoniomatteo.altervista.org//tim/img/device/K8/k8-3.jpg', 4),
(10, 'http://guidoantoniomatteo.altervista.org//tim/img/device/iphone/iphone-2.jpg', 5),
(11, 'http://guidoantoniomatteo.altervista.org//tim/img/device/iphone/iphone-1.jpg', 5),
(12, 'http://guidoantoniomatteo.altervista.org//tim/img/device/iphone/iphone-3.jpg', 5),
(13, 'http://guidoantoniomatteo.altervista.org/tim/img/device/smart-tv/tv-1.jpg', 6),
(14, 'http://guidoantoniomatteo.altervista.org/tim/img/device/smart-tv/tv-2.jpg', 6),
(15, 'http://guidoantoniomatteo.altervista.org/tim/img/device/gear360/first.jpg', 7),
(16, 'http://guidoantoniomatteo.altervista.org/tim/img/device/d7000/first.jpg', 8),
(17, 'http://guidoantoniomatteo.altervista.org/tim/img/device/vr2600/first.jpg', 9),
(18, 'http://guidoantoniomatteo.altervista.org/tim/img/device/viera/first.jpg', 10);

-- --------------------------------------------------------

--
-- Struttura della tabella `dispositivosudescrizione`
--

CREATE TABLE IF NOT EXISTS `dispositivosudescrizione` (
  `id_dispositivo` int(11) NOT NULL,
  `id_descrizione` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `dispositivosudescrizione`
--

INSERT INTO `dispositivosudescrizione` (`id_dispositivo`, `id_descrizione`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 1),
(4, 1),
(5, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `faqassistenza`
--

CREATE TABLE IF NOT EXISTS `faqassistenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `descrizione` text NOT NULL,
  `foto` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dump dei dati per la tabella `faqassistenza`
--

INSERT INTO `faqassistenza` (`id`, `nome`, `descrizione`, `foto`) VALUES
(1, 'Quali documenti sono necessari?', 'Dovrai fornire in visione i seguenti documenti:<ul><li>documento di identità del titolare linea (carta identità, patente di guida con foto, passaporto);</li><li>codice fiscale del titolare linea;</li><li>documentazione antiabusivismo, rappresentata da uno dei seguenti documenti:<ul><li>copia di una recente fattura (luce, gas, acqua) anche se intestata ad altri precedenti soggetti, occupanti la medesima unità immobiliare per la quale è stata fatta richiesta di collegamento telefonico<br>oppure<br>copia della concessione/licenza edilizia.<br>oppure<br>copia della domanda di concessione in sanatoria corredata della prova dell''avvenuto pagamento delle somme dovute a titolo di oblazione (così come previsto dal 2° comma dell''art.45 della legge 28.2.85 n.47).</li></ul></li></ul><b>Solo nel caso non fosse possibile</b> presentare uno qualsiasi dei documenti, potrai produrre in sostituzione una <b>autodichiarazione sostitutiva di atto notorio</b> autenticata dal notaio o dal segretario comunale come previsto dall''art.4 della legge 4.1.68 e successive modificazioni ed integrazioni.', 'http://guidoantoniomatteo.altervista.org/tim/img/as/faq/documenti.jpg'),
(2, 'Quali sono le diverse tipologie di linea telefonica di casa?', 'LINEA TELEFONICA PRINCIPALE: è una linea telefonica principale di tipo tradizionale per i clienti che non svolgono attività professionali intestata a qualunque componente del nucleo familiare anagrafico.<br/>\nLINEA TELEFONICA AGGIUNTIVA: è una linea telefonica aggiuntiva di tipo tradizionale intestata al medesimo titolare della linea principale, attivata nella stessa o in altra abitazione.\nLINEA ISDN: è una linea telefonica principale che si differenzia dalla linea di tipo tradizionale in quanto include alcuni servizi telefonici specifici.\nLINEA PER TRAFFICO ENTRANTE: è una linea telefonica di tipo tradizionale aggiuntiva a una linea principale, che consente la sola ricezione delle chiamate.\nLINEA IN FIBRA OTTICA: è la nuova linea per telefonare e navigare in Internet grazie all’alta velocità della fibra ottica, connettere contemporaneamente e con prestazioni elevate Tablet, PC, Smartphone e TV con  più applicazioni e dispositivi, vedere video anche in alta definizione senza attese né interruzioni.\n\nConsulta online le varie offerte disponibili.', NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `faqsmartlife`
--

CREATE TABLE IF NOT EXISTS `faqsmartlife` (
  `idsmartlife` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dump dei dati per la tabella `faqsmartlife`
--

INSERT INTO `faqsmartlife` (`idsmartlife`, `id`, `nome`, `descrizione`) VALUES
(3, 1, 'A chi &egrave; rivolta la promozione&shy; TIM Sky? ', 'La promozione &egrave; rivolta a tutti coloro che vogliono sottoscrivere un abbonamento Sky e scelgono la Fibra o l&rsquo;ADSL di TIM per fruire del servizio. '),
(3, 2, 'Posso aggiungere contenuti Sky?\r\n', 'S&igrave;, puoi scegliere subito di sottoscrivere contestualmente a Sky TV anche ulteriori prodotti Sky come Sky Cinema, Sky Sport, Sky Calcio, Sky Famiglia e Sky HD ad un corrispettivo mensile eventualmente promozionato; verifica le promozioni in corso sui prodotti Sky nella sezione Servizi Sky. \r\nOppure puoi aggiungere i prodotti Sky in qualsiasi momento dal sito sky.it/faidate o chiamando il numero 199.100.500*.'),
(4, 3, 'Come accedo a Netflix?', 'Entra nell''app dalla sezione dedicata nel menu principale del decoder TIMvision o scarica l''app dagli altri dispositivi compatibili. Ti verr&agrave; richiesto di registrarti al servizio.'),
(4, 4, 'Ho dimenticato l''email o la password di Netflix cosa devo fare?', 'Se hai dimenticato l''email o la password accedi al sito netflix.com e segui le istruzioni per il recupero delle credenziali. Cliccando sul link &quot;Recupera password&quot; dovrai fornire delle informazioni per il reset della password.'),
(1, 5, 'Posso vedere i contenuti Mediaset?', 'Premium Online offre oltre ai contenuti inclusi nella tua offerta anche contenuti delle reti Mediaset gratuite, (Canale 5, Italia 1 e Rete 4), che sono disponibili in modalit&agrave; on demand ma anche come canali live, 24 ore su 24. Completano l&rsquo;offerta dei canali free live, anche i canali tematici Mediaset come Iris, Tgcom 24, Top Crime, La 5, Italia 2 e Mediaset Extra.'),
(1, 6, 'Come accedo a Premium Online?', 'Dopo aver stipulato il contratto di Abbonamento, riceverai da Mediaset Premium una mail con i dettagli dell&rsquo;offerta e le credenziali di accesso che dovrai confermare entro 15 giorni.\r\nTI ricordiamo che per validare la tua richiesta &egrave; necessario confermare la mail sopra indicata.\r\nUna volta confermata la mail, entra nell''app Premium Online dal decoder TIMvision o negli altri dispositivi compatibili, accetta le Condizioni Generali di Fornitura del Servizio Premium Online ed inserisci le tue credenziali di accesso.'),
(1, 7, 'Cosa &egrave; incluso nel pacchetto Cinema?', 'Con il pacchetto Cinema hai oltre 2.500 film ogni anno, dalle grandi prime tv ai migliori capolavori di sempre, 1.000 ore in anteprima e il ricchissimo catalogo di Infinity per goderti il grande cinema dove e quando vuoi. Hai inoltre incluse nel pacchetto 2 partite a tua scelta di Serie A TIM al mese (esclusa la Uefa Champions League).'),
(2, 8, 'Non vedo i contenuti sulla TV, perch&eacute;?', 'Verifica di aver seguito correttamente tutti i passaggi della configurazione. Se non vedi la schermata Home di Chromecast sulla tua TV probabilmente stai utilizzando l''ingresso sbagliato. Premi il tasto Source/Ingresso sul telecomando della TV per cambiare l''ingresso finch&eacute; viene visualizzata la schermata Home di Chromecast.'),
(2, 9, 'Come posso vedere TIMvision con Chromecast?', 'Una volta eseguita l&rsquo;installazione, scarica sul tuo smartphone/tablet l&rsquo;App TIMvision, registrati su rete mobile TIM e accedi con la username e password. Per vedere i contenuti di TIMvision sulla TV, clicca l&rsquo;icona Chromecast nell&rsquo;App TIMvision in alto a destra e scegli il contenuto che vuoi vedere . In tal modo la riproduzione avverr&agrave; direttamente sulla tua TV.'),
(5, 10, 'Non rilevo il segnale Wi-Fi', 'Ti ricordiamo che puoi collegare il decoder  TIMvision a reti Wi-Fi che abbiano una crittografia di tipo WPA o WEP , non &egrave; possibile per motivi di sicurezza collegarsi a reti Wi-Fi non protette e a reti con l''identificativo (SSID) nascosto. Per avere una ricezione wi-fi ottimale controlla le impostazioni Wi-Fi del tuo   decoder .'),
(5, 11, 'Posso vedere contenuti in lingua originale?', 'Si, puoi vederli se &egrave; presente nella scheda di dettaglio del contenuto, il simbolo MULTIAUDIO. \r\nFai partire il contenuto e premi quindi il tasto INFO. Spostati con le frecce del telecomando e seleziona la lingua tra quelle disponibili.'),
(8, 12, 'Come posso leggere i miei libri?', 'Puoi leggere i contenuti acquistati su TIMreading da Smartphone, Tablet e PC.\r\nPer leggere i nostri eBook e magazine devi disporre di un Adobe ID, ossia di una username e una password, con il quale Adobe&reg; possa riconoscerti e assicurarsi che nessun altro oltre te possa leggere i contenuti che hai acquistato. Per maggiori informazioni vai nella sezione Adobe ID.'),
(9, 13, 'Posso comporre delle playlist con tutti i miei brani preferiti?', 'S&igrave;, &egrave; possibile organizzare la propria musica preferita in playlist personali: bastano pochi click per creare nuove playlist e modificare quelle esistenti. &Egrave; possibile gestire le playlist soltanto effettuando la registrazione sul sito timmusic.it ed autenticarsi inserendo le proprie credenziali'),
(7, 14, 'Dove posso scaricare l''applicazione?', 'I clienti con Smartphone o Tablet Android possono scaricare l&rsquo;applicazione TIMvision da Google Play Store.\r\nI clienti con iPhone o iPad possono accedere all&rsquo;applicazione TIMvision digitando sul browser del proprio telefonino.'),
(6, 15, 'Come attivare i servizi', 'A seguito dell&rsquo;attivazione di una delle offerte TIM sopra elencate, riceverai un SMS contenete il link di accesso alla pagina TIMENTERTAINMENT. (vai.tim.it/play) All&rsquo;interno della pagina puoi attivare la promozione di 3 mesi relativa al servizio prescelto .Puoi decidere di attivare un servizio e/o tutti quelli disponibili nella pagina TIMENTERTAINMENT.I servizi si disattiveranno in automatico al termine dei 3 mesi dall&rsquo;attivazione.NOTA BENE: per attivare i servizi &egrave; necessario che lo smartphone o tablet siano collegati alla rete 3G\\4G (no Wi-Fi)'),
(10, 16, 'Dove trovo il manuale di istruzioni del dispositivo?', 'Il manuale &egrave; disponibile online sul sito del produttore.'),
(11, 18, 'Dove trovo il manuale di istruzioni del dispositivo?', 'Il manuale &egrave; disponibile online sul sito del produttore.'),
(13, 19, 'Non riesco ad installare il prodotto. Cosa devo fare?', 'Ti consigliamo di rivolgerti ad uno dei nostri centri assistenza.'),
(12, 20, 'Non riesco ad installare il prodotto. Cosa devo fare?', 'Ti consigliamo di rivolgerti ad uno dei nostri centri assistenza.'),
(14, 21, 'La tecnologia NFC &egrave; sicura?', 'I pagamenti tramite tecnologia NFC garantiscono transazioni criptate secondo i requisiti di sicurezza di banche e circuiti di pagamento.'),
(15, 22, 'A cosa serve la firma digitale?', 'Permette di conferire ai documenti elettronici piena validit&agrave; legale in modo semplice e sicuro, attraverso il download di un software facile da utilizzare anche in mobilit&agrave;');

-- --------------------------------------------------------

--
-- Struttura della tabella `faqsuassistenza`
--

CREATE TABLE IF NOT EXISTS `faqsuassistenza` (
  `idassistenza` int(11) NOT NULL,
  `idfaq` int(11) NOT NULL,
  PRIMARY KEY (`idassistenza`,`idfaq`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `faqsuassistenza`
--

INSERT INTO `faqsuassistenza` (`idassistenza`, `idfaq`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `marcadispositivo`
--

CREATE TABLE IF NOT EXISTS `marcadispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dump dei dati per la tabella `marcadispositivo`
--

INSERT INTO `marcadispositivo` (`id`, `nome`) VALUES
(1, 'Samsung'),
(2, 'Nokia'),
(3, 'LG'),
(4, 'Apple'),
(5, 'Netgear'),
(6, 'TPLink'),
(7, 'Panasonic');

-- --------------------------------------------------------

--
-- Struttura della tabella `offertefoto`
--

CREATE TABLE IF NOT EXISTS `offertefoto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foto` varchar(1024) NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `offertefoto`
--

INSERT INTO `offertefoto` (`id`, `foto`, `descrizione`) VALUES
(1, 'img/offerte/offertePiani.png', 'PIANI IN OFFERTA'),
(2, 'img/offerte/offerteSLS.png', 'SMART LIFE IN OFFERTA'),
(3, 'img/offerte/offerteDevice.png', 'DISPOSITIVI IN OFFERTA');

-- --------------------------------------------------------

--
-- Struttura della tabella `pianotariffario`
--

CREATE TABLE IF NOT EXISTS `pianotariffario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `descrizione` text NOT NULL,
  `chiamate` varchar(64) DEFAULT NULL,
  `messaggi` varchar(64) DEFAULT NULL,
  `internet` varchar(64) DEFAULT NULL,
  `categoria` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `prezzo` varchar(64) NOT NULL,
  `prezzoscontato` varchar(1024) DEFAULT NULL,
  `attivazionesconto` text,
  PRIMARY KEY (`id`),
  KEY `categoria` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `pianotariffario`
--

INSERT INTO `pianotariffario` (`id`, `nome`, `descrizione`, `chiamate`, `messaggi`, `internet`, `categoria`, `foto`, `prezzo`, `prezzoscontato`, `attivazionesconto`) VALUES
(1, 'Tim Special Voce', 'Chiami tutti, e i minuti non scadono.', '500 minuti', NULL, NULL, 1, 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobile/timspecialvoce.jpg', '10&euro;/4sett.', '8&euro;/4sett', 'Solo online.'),
(2, 'Tim Special Voce + Dati', 'Chiami, navighi e i minuti che non consumi non scadono.', '1000 minuti', NULL, '4 GB', 1, 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobile/timspecialvoceedati.jpg', '15 &euro;/4 sett.', '10&euro;/4sett', 'Online e in tutti i negozi TIM.'),
(3, 'Tim Young Junior', 'TIM per i più giovani.', '60 minuti', '50 messaggi', '500 MB', 1, 'http://guidoantoniomatteo.altervista.org/tim/img/piani/mobile/timyoung.jpg', '8&euro;/4sett.', '6&euro;/4sett', 'Solo online.');

-- --------------------------------------------------------

--
-- Struttura della tabella `progetti`
--

CREATE TABLE IF NOT EXISTS `progetti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `foto` varchar(1024) NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `progetti`
--

INSERT INTO `progetti` (`id`, `nome`, `foto`, `descrizione`) VALUES
(1, 'Ambiente e<br> Sociale', 'http://www.guidoantoniomatteo.altervista.org/tim/img/progetti/ambientesociale.png', 'Ci impegnamo ogni giorno per i bisogni delle comunità con soluzioni innovative e altamente tecnologiche.'),
(2, 'Cultura', 'http://www.guidoantoniomatteo.altervista.org/tim/img/progetti/cultura.png', 'Le nuove tecnologie contribuiscono alla diffusione della cultura nel Paese e alla nascita di nuove professioni.'),
(3, 'Sport', 'http://www.guidoantoniomatteo.altervista.org/tim/img/progetti/sport.png', 'Lo sport è passione, rispetto e condivisione di emozioni. Un patrimonio di valori e buone pratiche in cui ci identifichiamo.');

-- --------------------------------------------------------

--
-- Struttura della tabella `progettiinevidenza`
--

CREATE TABLE IF NOT EXISTS `progettiinevidenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idprogetto` int(11) NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idprogetto` (`idprogetto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dump dei dati per la tabella `progettiinevidenza`
--

INSERT INTO `progettiinevidenza` (`id`, `idprogetto`, `descrizione`) VALUES
(1, 1, 'TIM SOSTIENE SODALITAS SOCIAL INNOVATION.'),
(2, 1, 'TIM SOSTIENE I #GLOBALGOALS.'),
(3, 2, 'FESTIVAL DELLE LETTERATURE DELL''ADRIATICO.'),
(4, 2, 'PAPPANOIINWEB 2015.'),
(5, 2, 'LE CONVERSAZIONI.'),
(6, 3, 'JUNIOR TIM CUP.'),
(7, 3, 'LEGA SERIE A.');

-- --------------------------------------------------------

--
-- Struttura della tabella `recensionedispositivo`
--

CREATE TABLE IF NOT EXISTS `recensionedispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iddispositivo` int(11) NOT NULL,
  `utente` varchar(128) NOT NULL,
  `valutazione` enum('1','2','3','4','5') NOT NULL,
  `descrizione` text NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dump dei dati per la tabella `recensionedispositivo`
--

INSERT INTO `recensionedispositivo` (`id`, `iddispositivo`, `utente`, `valutazione`, `descrizione`, `data`) VALUES
(1, 1, 'Mario Rossi', '4', 'PREMESSA<br/>\r\nNon si fa in tempo ad acquistare uno smartphone che pochi mesi dopo esce il modello superiore, scrivo questa breve recensione indicando le differenze principali tra il Galaxy S6 (ancora attualissimo) ed il nuovo top di gamma di casa Samsung, il Galaxy S7.\r\n<br/>\r\nQUALITA'' COSTRUTTIVA, DIMENSIONI, PESO E BATTERIA:<br/>\r\nLe differenze a livello estetico sono minime. Infatti il produttore ha scelto di mantenere fondamentalmente inalterata la struttura in metallo e vetro che era presente anche sul S6.\r\nLe dimensioni di Galaxy S6 sono pari a 143,4 x 70,5 x 6,8 mm mentre Galaxy S7 ha dimensioni di 142,4 x 69,6 x 7,9 mm, quasi simili tranne per lo spessore, piu'' ampio di 1 mm nell'' S7 per via della scelta di integrare una batteria da 3000 mAh (contro i 2550 mAh di S6). Ciò ovviamente incide anche sul peso del dispositivo, infatti l''S7 ha un peso di 152 grammi contro i 138 grammi del modello precedente. Entrambi gli smartphone supportano la ricarica wireless, il quick charge e la batteria non è removibile. Punto a favore del Galaxy S7 è senza dubbio la certificazione IP-68 (resistenza all''acqua e alla polvere) in grado di proteggere lo smartphone dall''immersione continua in oltre 1 metro d''acqua e protezione totale dall''ingresso della polvere.\r\n', '2016-07-15 06:18:35'),
(2, 1, 'Luigi Pirandello', '3', 'Terminale strepitoso sia come hw, sw, os e design. Si usa anche con una mano con la giusta cover grip. Purtroppo ne ho chiesto la sostituzione perchè dopo un mese di uso continuo presentava due difetti ricorrenti: 1) interruzione del segnale dati per circa 20 secondi ogni 50 minuti circa, non imputabile al gestore; 2) sensibile surriscaldamento ogni 1-2 giorni. ', '2016-07-15 06:56:45'),
(21, 4, 'fcbcfbc', '1', 'bvcbcvbcvb', '2016-07-20 02:14:45'),
(22, 1, 'hghghg', '1', 'hjn', '2016-07-20 02:18:33'),
(23, 5, 'd', '1', 'g', '2016-07-20 02:27:25');

-- --------------------------------------------------------

--
-- Struttura della tabella `regolesmartlife`
--

CREATE TABLE IF NOT EXISTS `regolesmartlife` (
  `idsmartlife` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dump dei dati per la tabella `regolesmartlife`
--

INSERT INTO `regolesmartlife` (`idsmartlife`, `id`, `nome`, `descrizione`) VALUES
(3, 1, 'Dettagli e limiti dell''offerta ', 'Tutti i prezzi sono IVA inclusa\r\nPrima di aderire all&rsquo;offerta, verifica la copertura nella zona di tuo interesse e per ulteriori informazioni, vai in un Negozio TIM, chiama il 187 o visita questo sito.\r\n\r\nL&rsquo;attivazione dell&rsquo;offerta &ldquo;TIM Sky&rdquo; presuppone la sottoscrizione di due distinti contratti, uno con TIM e uno con Sky Italia, ciascuno regolato dalle rispettive Condizioni Generali di Contratto.\r\n'),
(3, 2, 'Come attivare l''offerta', 'Prima di aderire all&rsquo;offerta, verifica la copertura nella zona di tuo interesse e, per ulteriori informazioni vai in un Negozio TIM, chiama il Servizio Clienti linea fissa 187 o visita questo sito.\r\n\r\nL&rsquo;attivazione dell&rsquo;offerta &ldquo;TIM Sky&rdquo; presuppone la sottoscrizione di due distinti contratti, uno con TIM e uno con Sky Italia, ciascuno regolato dalle rispettive Condizioni Generali di Contratto. I costi di abbonamento delle offerte TIM alle condizioni riservate ai clienti che hanno richiesto &ldquo;TIM Sky&rdquo; verranno applicati a partire dalla data di attivazione dell&rsquo;offerta di TIM sottoscritta. '),
(4, 3, 'Abbonamento', 'Il tuo abbonamento Netflix continuer&agrave; di mese in mese fino a che non venga disdetto. A meno che tu non provveda a disdire il tuo abbonamento prima della data di rinnovo mensile, ci autorizzi ad addebitarti la quota di abbonamento del mese successivo sul Metodo di Pagamento prescelto (vedi la sezione &quot;Disdetta&quot; che segue). Per poter utilizzare il servizio Netflix, devi disporre di accesso a Internet e di un dispositivo compatibile con Netflix; devi inoltre fornirci un metodo di pagamento attuale, valido e accettato (&quot;Metodo di Pagamento&quot;), che potrai aggiornare periodicamente. Potrai trovare informazioni specifiche in merito al tuo abbonamento Netflix visitando il nostro sito e cliccando sul link &quot;Il tuo account&quot;, disponibile nella parte superiore delle pagine del sito Netflix, sotto al nome del tuo profilo.'),
(1, 4, 'Cosa succede in caso di cessazione o mancata attivazione dell''offerta TIM?', 'Se sei un cliente su TIM SMART CASA/MOBILE o FIBRA non ci sono impatti sui costi del tuo abbonamento TIM che continuer&agrave; a rimanere attivo. Se sei un cliente ADSL che non ha gi&agrave; la nuova offerta su TIM SMART CASA/MOBILE con internet fino a 20Mega la cessazione o mancata attivazione del servizio Premium Online comporter&agrave; il venir meno della gratuit&agrave; dell&rsquo;abbonamento Superinternet che, salvo disattivazione da parte del cliente, verr&agrave; addebitato e fatturato al prezzo di listino TIM in vigore a partire dalla data di cessazione del servizio Premium Online.\r\n\r\nCome da Condizioni Generali di contratto in caso di recesso dall&rsquo;abbonamento Premium Online nel 1&deg; anno dall&rsquo;attivazione &egrave; previsto un costo operatore di 8.34 &euro;, oltre al recupero di tutti gli sconti promozionali fruiti in relazione al servizio Premium Online.'),
(2, 5, 'Chi pu&ograve; scegliere il Pack TIMvision&amp;Chromecast?', 'Il pack TIMvision&amp;Chromecast &egrave; disponibile per tutti i clienti prepagati TIM con abbonamento dati attivo.\r\nCome disattivo l&rsquo;offerta TIMvision?\r\nE&rsquo;possibile disattivare gratuitamente l&rsquo;offerta acquistata in qualsiasi momento chiamando il Servizio Clienti 119, inviando un sms al 40916 con il testo &ldquo;PACKVISION OFF&rdquo;&rdquo;, accedendo a MyTIM Mobile  del sito tim.it o direttamente tramite App TIMvision.'),
(2, 6, 'Quali sono i dispositivi compatibili per vedere TIMvision con Chromecast?', 'Chromecast &egrave; compatibile con iPhone&reg;, iPad&reg; o dispositivi Android e con i laptop Chromebook, Mac&reg;'),
(5, 7, 'Perch&eacute; &egrave; necessario registrarsi e come posso farlo?', 'Soltanto registrandoti puoi attivare l&rsquo;Abbonamento o acquistare i singoli titoli del Videostore e ricevere la Guida Tv che settimanalmente ti tiene aggiornato sulle novit&agrave; del nostro catalogo. Puoi registrarti da decoder creando un account TIMvision (email e password) dalla sezione Profilo/Modifica Account o utilizzare l&rsquo;account @alice.it o @tim.it suggerito. Il tuo account ti permette di utilizzare il servizio, senza costi aggiuntivi, anche su altri dispositivi come smartphone, tablet, Smart TV, etc.'),
(8, 8, 'Come posso pagare i contenuti?', 'Puoi pagare i contenuti con credito residuo TIM o in fattura linea mobile di TIM, in fattura linea fissa di TIM o con carta di credito.\r\n\r\n'),
(9, 9, 'Posso scaricare canzoni da TIMmusic?', 'S&igrave;, se hai acquistato in passato le Cubomusica Download Card enon consumato i download a tua disposizione o sottoscritto un abbonamento inclusivo di download.'),
(9, 10, 'Qual &egrave; la durata di un abbonamento?', 'L''abbonamento ha una durata di 30 giorni e si rinnova in automatico. In bolletta viene riportato la rata abbonamento in base al giorno in cui si sottoscrive il servizio.'),
(7, 11, 'Cosa &egrave; possibile vedere dall&rsquo;estero?\r\n', 'Il servizio TIMvision non &egrave; disponibile dall&rsquo;estero.\r\n\r\n'),
(6, 12, 'Compatibilit&agrave; e dettagli offerta', 'Le rispettive promo 3 mesi dell&rsquo;offerta TIM Special Start, Large, o Unlimited, della TIM Young&amp;Music e delle offerte Internet sono incompatibili tra loro. Le stesse promo potranno inoltre essere attivate al massimo una volta per linea.Il cliente potr&agrave; disattivare le promozioni attivate accedendo con le proprie credenziali al portale 119.itPer fruire dell&rsquo;offerta &egrave; necessario scaricare le seguenti APP:\r\n\r\nTIMvision\r\nL&rsquo;app TIMmusic &egrave; compatibile con smartphone o tablet con software iOS 5.0, Android 2.3, Windows Phone 8, Windows Phone 8 RT, Windows Phone 7.8 o versioni successive\r\n\r\nTIMmusic\r\nL&rsquo;app TIMmusic &egrave; compatibile con dispositivi Android dalla versione 2.3 in su, iOS dalla versione 7.0 in su, Windows 7 e 8 e BlackBerry con sistema operativo OS10.\r\n\r\nTIMreading Audiobook:\r\nL&rsquo;App TIMreading Audiobook &egrave; compatibile con dispositivi Android, dalla versione 4.1, e iOs, dalla versione 7.1.\r\n\r\nTIMgames\r\nIl servizio TIMgames &egrave; compatibile con dispositivi Android dalla versione 4.0 in su, iOS dalla versione 7.0 in su, Windows dalla 8.\r\n\r\nSerie A TIM\r\nL&rsquo;app Serie A TIM &egrave; compatibile con dispositivi Android dalla versione 4.0 in su, iOS dalla versione 7.0 in su, Windows dalla 8.\r\n'),
(11, 13, 'Quando posso recedere dall''abbonamento?', 'L''abbonamento ha durata di 12 mesi. In caso di recesso anticipato sar&agrave; applicata una penale di 50&euro; pi&ugrave; le rate mancanti.'),
(10, 14, 'Quando posso recedere dall''abbonamento?', 'L''abbonamento ha durata di 12 mesi. In caso di recesso anticipato sar&agrave; applicata una penale di 50&euro; pi&ugrave; le rate mancanti.'),
(13, 15, 'Quando posso recedere dall''abbonamento?', 'Non &egrave; previsto alcun abbonamento per questo servizio. Il costo indicato &egrave; una tantum.'),
(12, 16, 'Quando posso recedere dall''abbonamento?', 'L''abbonamento ha durata di 24 mesi. In caso di recesso anticipato sar&agrave; applicata una penale di 50&euro; pi&ugrave; le rate mancanti.'),
(15, 17, 'Quando posso recedere dall''abbonamento?', 'Il recesso pu&ograve; avvenire in qualsiasi momento.'),
(14, 18, 'Quando posso recedere dall''abbonamento?', 'Il recesso pu&ograve; avvenire in qualsiasi momento.');

-- --------------------------------------------------------

--
-- Struttura della tabella `relazionepianismartlife`
--

CREATE TABLE IF NOT EXISTS `relazionepianismartlife` (
  `idpiano` int(11) NOT NULL,
  `idsmartlife` int(11) NOT NULL,
  PRIMARY KEY (`idpiano`,`idsmartlife`),
  KEY `idsmartlife` (`idsmartlife`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `relazionepianismartlife`
--

INSERT INTO `relazionepianismartlife` (`idpiano`, `idsmartlife`) VALUES
(2, 1),
(3, 2),
(2, 3),
(3, 3),
(3, 4),
(2, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15);

-- --------------------------------------------------------

--
-- Struttura della tabella `smartlife`
--

CREATE TABLE IF NOT EXISTS `smartlife` (
  `fotoprincipale` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `descrizione` text NOT NULL,
  `descrizioneshort` text NOT NULL,
  `sottocategoria` int(11) DEFAULT NULL,
  `categoria` int(11) NOT NULL,
  `prezzo` text NOT NULL,
  `prezzoscontato` text,
  `attivazionescontato` text,
  PRIMARY KEY (`id`),
  KEY `sottocategoria` (`sottocategoria`,`categoria`),
  KEY `categoria` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dump dei dati per la tabella `smartlife`
--

INSERT INTO `smartlife` (`fotoprincipale`, `id`, `nome`, `descrizione`, `descrizioneshort`, `sottocategoria`, `categoria`, `prezzo`, `prezzoscontato`, `attivazionescontato`) VALUES
('premium.png', 1, 'Premium', '18 Canali in live streaming e un catalogo con oltre 8000 titoli on demand, inclusi i contenuti di Infinity, anche in HD, con doppio audio e sottotitoli. Centinaia di film e serie tv in anteprima e in esclusiva. Tutta la UEFA Champions League (2015-2018) in esclusiva, la Serie A Tim delle squadre Premium, i campionati esteri, il FIA World Rally Championship 2016, il meglio dell&rsquo;intrattenimento di Mediaset e molto altro ancora!', 'Con tutte le partite, le notizie,<br>i video-goal, le sintesi<br>ovunque sempre con te', 1, 4, '&lt;span&gt;&lt;h1&gt;Ora&lt;br&gt;a 29 &euro;/mese&lt;/h1&gt;&lt;/span&gt;', '19&euro;/mese', 'Solo online.'),
('chromecast.png', 2, 'Chromecast', 'Chromecast &egrave; un dispositivo di streaming multimediale che si collega alla porta HDMI del televisore. Utilizza il tuo dispositivo mobile per trasmettere programmi TV, film, musica, sport, giochi preferiti e non solo alla TV di casa. Chromecast &egrave; compatibile con iPhone&reg;, iPad&reg;, telefoni e tablet Android, laptop Windows&reg;, Mac&reg; e Chromebook.*', 'Trasmetti video e foto dal tuo\r\nsmartphone direttamente\r\nsul tuo televisore', 1, 4, '&lt;span&gt;&lt;h1&gt;Ora&lt;br&gt;a 39 &euro;&lt;/h1&gt;&lt;/span&gt;', '29&euro;', 'Online e nei negozi TIM.'),
('sky.png', 3, 'Sky', 'Solo con My Sky la TV &egrave; davvero ai tuoi comandi e non perdi pi&ugrave; nulla dei tuoi programmi preferiti. Registri i programmi che ami con un solo tasto del telecomando e li vedi quando vuoi, metti in pausa anche in diretta e fai cominciare dall&rsquo;inizio i programmi gi&agrave; in onda.\r\n\r\nScopri inoltre un&rsquo;intera videoteca gratuita con Sky On Demand, tanti titoli nuovi ogni giorno da vedere quando vuoi. E con Tim non hai bisogno della parabola.', 'Il servizio che ami, ora senza parabola.', 1, 4, '&lt;span&gt;&lt;h1&gt;Solo ora&lt;br&gt;a 29 &euro;&frasl;mese&lt;/h1&gt;anzich&egrave; 39 &euro;&frasl;mese&lt;/span&gt;', '19&euro;/mese', 'In tutti i negozi TIM.'),
('netflix.png', 4, 'Netflix', 'Serie originali, commedie, drammi e programmi per bambini, puoi guardare le tue serie TV e film preferiti in streaming istantaneo sul dispositivo che preferisci. L''offerta TV che aspettavamo da tempo per la grande variet&agrave; dei contenuti, da vedere quando e dove vuoi con qualit&agrave; della Rete TIM e senza vincoli, disponibile direttamente sulla TV di casa anche attraverso il decoder TIMvision con la qualit&agrave; HD.\r\n\r\nPuoi guardare Netflix in qualsiasi momento, anche da smartphone senza consumare giga.\r\nUn''esperienza facile e veloce con tre pacchetti da scegliere in abbonamento.\r\n\r\n', 'Ovunque e senza consumare giga', 1, 4, '&lt;span&gt;&lt;h1&gt;7.99 &euro;&frasl;mese&lt;/h1&gt;su un dispositivo&lt;/span&gt;\r\n&lt;span&gt;&lt;h1&gt;9.99 &euro;&frasl;mese&lt;/h1&gt;su 2 dispositivi&lt;/span&gt;\r\n&lt;span&gt;&lt;h1&gt;11.99 &euro;&frasl;mese&lt;/h1&gt;su 4 dispositivi&lt;/span&gt;', NULL, ''),
('vision.png', 5, 'Vision', 'L&rsquo;abbonamento TIMvision ti offre un ricco catalogo da cui scegliere i contenuti che preferisci, in Cinema, Serie, Junior, Programmi TV, Musica e Documentari, a soli 5&euro; al mese anzich&egrave; 10 euro al mese.\r\nCon l&rsquo;offerta serie TV tutti gli episodi delle migliori serie da vedere tutte d&rsquo;un fiato; dalle anteprime esclusive come American Crime, Flesh and Bone o la seconda stagione di The Royals.\r\nE poi scopri tutte le stagioni di Black Sails, Dexter, 24, Californication e tante altre.\r\nSu Ultimi 7 giorni TV trovi i programmi dell&rsquo;ultima settimana di RAI e la LA7.', 'I migliori film, scelti da noi per te', 1, 4, '&lt;span&gt;&lt;h1&gt;Solo ora&lt;br&gt;a 29 &euro;&frasl;mese&lt;/h1&gt;anzich&egrave; 39 &euro;&frasl;mese&lt;/span&gt;', NULL, ''),
('', 6, 'TimGames', 'L&rsquo;offerta I Love Games Promo ti consente di scegliere tutti i giochi che vuoi sul tuo smartphone e giocare illimitatamente.\r\nSparatutto, sport estremi, i migliori Classici e molto altro ancora. Con TIMgames hai a disposizione centinaia di giochi per il tuo smartphone e tablet, per divertirti dove e quando vuoi. Il traffico Internet per il download dei giochi &egrave; incluso! ', '', NULL, 4, '&lt;span&gt;&lt;h1&gt;TimGames&lt;br&gt;a 4.99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, ''),
('', 7, 'TimCalcio', 'L&rsquo;APP Serie A TIM &egrave; l&rsquo;applicazione ufficiale del Campionato di Calcio di Serie A e per la stagione 2016/2017 continuer&agrave; ad essere il riferimento per tutti gli appassionati, con un modo nuovo e completo di seguire dove vuoi e in qualunque momento lo spettacolo del Campionato.\r\n\r\nIn esclusiva, potrai seguire ogni partita dove vuoi, non perdendo neanche un minuto di gioco grazie alla cronaca in tempo reale di tutte le gare, la disponibilit&agrave; dei video di tutti i goal e le azioni salienti a pochi minuti dall&rsquo;evento. Alla fine del primo tempo e della gara, avrai a disposizione gli highlight per rivivere tutte le emozioni, oltre alle innovative infografiche statistiche che arricchiranno la cronaca, aiutandoti a interpretare al meglio l&rsquo;andamento dell&rsquo;incontro.\r\nAccedi in qualsiasi momento a tutte le statistiche del Campionato, quando vuoi e in mobilit&agrave; potrai rivedere tutti i goal del Campionato. Nella sezione &ldquo;Top&rdquo; hai anche una selezione delle migliori giocate della giornata. Grazie alle notifiche push in tempo reale, anche fuori casa o quando sei impegnato, avrai un canale sempre acceso sulla tua squadra del cuore e su tutta la Serie A. Personalizza gli aggiornamenti live, scegliendo una singola partita, videogoal, news o tutti i contenuti pi&ugrave; accattivanti dell&rsquo;App Serie A TIM.', '', NULL, 4, '&lt;span&gt;&lt;h1&gt;TimCalcio&lt;br&gt;a 9.99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, ''),
('', 8, 'TimReading', 'Porta sempre con te su Smartphone e Tablet i tuoi eBook preferiti,\r\nascolta gli audiolibri dovunque tu sia, segui tutte le tue passioni scegliendo tra\r\ni magazine pi&ugrave; amati e sfoglia il tuo quotidiano dalle prime ore del mattino.\r\nSu TIMreading trovi ci&ograve; che ami leggere e ascoltare, dove e quando vuoi.', '', NULL, 4, '&lt;span&gt;&lt;h1&gt;Tutti i libri&lt;br&gt;a 9,99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, ''),
('', 9, 'TimMusic', 'Con TIMmusic puoi:\r\n \r\n- Ascoltare milioni di brani in streaming di tutti i generi, dove e quando vuoi\r\n- Creare le tue playlist personali o scegliere quelle suggerite da Dj e artisti famosi\r\n- Salvare album e playlist per l''ascolto offline, per averli sempre con te anche in assenza di rete\r\n- Scoprire contenuti esclusivi come anteprime e interviste ai tuoi artisti preferiti', '', NULL, 4, '&lt;span&gt;&lt;h1&gt;La musica&lt;br&gt;a 9,99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, ''),
('gear-s.png', 10, 'Samsung Gear-S', 'Samsung Gear S presenta un elegante display Super AMOLED curvo per una vestibilit&agrave; ottimale e schermate personalizzabili e cinturini intercambiabili per esprimere al meglio il proprio stile. Inoltre l''interfaccia semplice e intuitiva consente l''accesso istantaneo alle informazioni e alle notifiche di maggiore interesse.', 'Grazie alla connettiviti&agrave; 3G, Wi-Fi e Bluetooth, Samsung Gear S ti consente di effettuare e ricevere chiamate e messaggi ', NULL, 1, '&lt;span&gt;&lt;h1&gt;Un mondo pi&ugrave; smart&lt;br&gt;a 9,99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, NULL),
('polar-hr.png', 11, 'Polar-HR', 'Se stai cercando di migliorare la forma fisica e vuoi monitorare i progressi che stai ottenendo, il Fitness Test ti indicher&agrave; esattamente ci&ograve; che hai bisogno di sapere, in modo estrememente semplice ed in soli cinque minuti. Confrontando regolarmente i risultati del test potrai seguire i miglioramenti della tua forma fisica.', 'Quando si tratta di fitness, noi possiamo aiutarti ad allenarti in modo mirato ai tuoi obiettivi', NULL, 1, '&lt;span&gt;&lt;h1&gt;Un mondo pi&ugrave; smart&lt;br&gt;a 6,99 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, NULL),
('tim-casa.png', 12, 'Tim Casa', 'TIM Home Connect &egrave; l&rsquo;offerta pensata per essere utilizzata nei dispositivi di domotica presenti nella casa, la cui gestione prevede l''uso di una SIM.\r\nCon Tim Home Connect infatti hai a disposizione minuti, MB e SMS da utilizzare per connettere e gestire il tuo antifurto, la tua caldaia o altri sistemi di domotica.', 'La soluzione ideale per gestire tutti i sistemi di domotica presenti nella tua casa', NULL, 2, '&lt;span&gt;&lt;h1&gt;Un mondo pi&ugrave; smart&lt;br&gt;a 1,50 &euro;&frasl;mese&lt;/h1&gt;&lt;/span&gt;', NULL, NULL),
('tim-tag.png', 13, 'Tim Tag', 'TIMTag &egrave; il dispositivo che ti informa sulla posizione del tuo amico a quattro zampe e delle cose a te pi&ugrave; care.\r\nSegui in tempo reale i suoi spostamenti sul tuo smartphone senza perderlo mai di vista.\r\n\r\nCon TIMTag hai un dispositivo di localizzazione GPS di ultima generazione, con 12 mesi di servizio TIMTag e una TIM Card inclusi e un'' App dedicata intuitiva e semplice da utilizzare!', 'TIMTag &egrave; il dispositivo che \r\nti informa sulla posizione del tuo amico a quattro zampe', NULL, 2, '&lt;span&gt;&lt;h1&gt;Segui il tuo cane&lt;br&gt;con soli 70 &euro;&lt;/h1&gt;&lt;/span&gt;', NULL, NULL),
('firma-digitale.png', 14, 'Firma digitale', 'Da oggi con l''Identit&agrave; digitale, cittadini italiani e imprese possono accedere in modo semplice e sicuro ai servizi online della Pubblica Amministrazione e delle aziende private che aderiscono a SPID (Sistema Pubblico di Identit&agrave; Digitale) utilizzando un unico account.', 'Dalla penna al digitale', NULL, 3, '&lt;span&gt;&lt;h1&gt;&lt;br&gt;Solo 1,50 &euro;/mese&lt;/h1&gt;&lt;/span&gt;', NULL, NULL),
('pagamenti.png', 15, 'Pagamenti', 'I dati della tua carta di credito o prepagata sono memorizzati in modo confidenziale e protetto sulla TIM Card.\r\nBasta un tocco per scegliere la carta con cui effettuare i tuoi acquisti.\r\nLasci il portafoglio a casa e utilizzi lo smartphone per avere a disposizione le tue carte.', 'Scegli le carte di pagamento di Intesa Sanpaolo, BNL o Mediolanum: pagare &egrave; semplice e conveniente', NULL, 3, '&lt;span&gt;&lt;h1&gt;&lt;br&gt;Solo 8,50 &euro;/mese&lt;/h1&gt;&lt;/span&gt;', NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `smartlifedispositivi`
--

CREATE TABLE IF NOT EXISTS `smartlifedispositivi` (
  `iddispositivo` int(11) NOT NULL,
  `idsmartlife` int(11) NOT NULL,
  PRIMARY KEY (`iddispositivo`,`idsmartlife`),
  KEY `idsmartlife` (`idsmartlife`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `smartlifedispositivi`
--

INSERT INTO `smartlifedispositivi` (`iddispositivo`, `idsmartlife`) VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(3, 2),
(1, 3),
(2, 3),
(3, 3),
(6, 3),
(10, 3),
(1, 4),
(2, 4),
(3, 4),
(6, 4),
(10, 4),
(1, 5),
(2, 5),
(3, 5),
(6, 5),
(10, 5),
(1, 6),
(2, 6),
(3, 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `smartlifefotoulteriori`
--

CREATE TABLE IF NOT EXISTS `smartlifefotoulteriori` (
  `id` int(11) NOT NULL,
  `idsmartlife` int(11) NOT NULL,
  `foto` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `smartlifefotoulteriori`
--

INSERT INTO `smartlifefotoulteriori` (`id`, `idsmartlife`, `foto`) VALUES
(0, 6, '1.png'),
(1, 6, '2.png'),
(2, 6, '3.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `sottocategorieassistenza`
--

CREATE TABLE IF NOT EXISTS `sottocategorieassistenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `categoria` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria` (`categoria`),
  KEY `categoria_2` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dump dei dati per la tabella `sottocategorieassistenza`
--

INSERT INTO `sottocategorieassistenza` (`id`, `nome`, `categoria`) VALUES
(5, 'fisso', 1),
(6, 'mobile', 1),
(7, 'Cosa puoi fare online', 1),
(8, 'Serve aiuto per passare in tim', 1),
(9, 'Fisso', 2),
(10, 'Mobile', 2),
(11, 'Online', 2),
(12, 'Smartphone e Tablet', 3),
(13, 'Servizi Assistenza Tecnica', 3),
(14, 'Posta', 3),
(15, 'TIMgames', 4),
(16, 'TimMusic', 4),
(17, 'TIMreading', 4),
(18, 'TIMvision', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `sottocategoriesmartlife`
--

CREATE TABLE IF NOT EXISTS `sottocategoriesmartlife` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `descrizione` text NOT NULL,
  `categoria` int(11) NOT NULL,
  `foto` varchar(1024) NOT NULL,
  `idsmartlife` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `sottocategoriesmartlife`
--

INSERT INTO `sottocategoriesmartlife` (`id`, `nome`, `descrizione`, `categoria`, `foto`, `idsmartlife`) VALUES
(1, 'TimTV', 'Con i nostri servizi hai a disposizione il meglio di cartoni,cinema e serie TV\r\na casa e in viaggio', 4, 'TimTV.png', -1),
(2, 'TimMusic', 'Milioni di brani in streaming da ascoltare dove e quando vuoi,\r\nsenza consumare GB', 4, 'TimMusic.png', 9),
(3, 'TimReading', 'Porta sempre con te su Smartphone e Tablet i tuoi eBook preferiti,\r\ni magazine pi&#251; amati e il tuo quotidiano', 4, 'TimReading.png', 8),
(6, 'TimGames', 'Sparatutto, sport estremi, i migliori classici e molto altro ancora...\r\nHai a disposizione centinaia di giochi per il tuo smartphone e tablet', 4, 'TimGames.png', 6),
(7, 'TimCalcio', 'Vivi il meglio della Serie A TIM e i migliori momenti del Campionato\r\nsul tuo Smartphone o Tablet e senza consumare GB', 4, 'TimCalcio.png', 7);

-- --------------------------------------------------------

--
-- Struttura della tabella `testimonial`
--

CREATE TABLE IF NOT EXISTS `testimonial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `frase1` text NOT NULL,
  `frase2` text,
  `foto` varchar(1024) NOT NULL,
  `linkspot` varchar(1024) NOT NULL,
  `linkintervista` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `testimonial`
--

INSERT INTO `testimonial` (`id`, `nome`, `frase1`, `frase2`, `foto`, `linkspot`, `linkintervista`) VALUES
(1, 'Fabio Fazio', '''''Il futuro ci sorprenderà.''''', '''''Si può essere dovunque con un click, andare dappertutto.''''', 'img/testimonial/fabiofazio.jpg', 'https://www.youtube.com/watch?v=eTz4o7NMGXg', NULL),
(2, 'Sir Tim Berners-Lee', '''''Il futuro è ciò che costruiamo.''''', '', 'img/testimonial/lee.jpg', 'https://www.youtube.com/watch?v=-rxy9lI8-7Q', 'https://www.youtube.com/watch?v=SQdMYRn6rRI'),
(3, 'Pif', '''''Bisogna ricordarsi che la rete è un mezzo e non un fine.''''', '', 'img/testimonial/pif.png', 'https://www.youtube.com/watch?v=5hHXbK9Dpyc', NULL);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `assistenza`
--
ALTER TABLE `assistenza`
  ADD CONSTRAINT `assistenza_ibfk_1` FOREIGN KEY (`sottocategoria`) REFERENCES `sottocategorieassistenza` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `assistenzadispositivi`
--
ALTER TABLE `assistenzadispositivi`
  ADD CONSTRAINT `assistenzadispositivi_ibfk_1` FOREIGN KEY (`iddispositivo`) REFERENCES `dispositivo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assistenzadispositivi_ibfk_2` FOREIGN KEY (`idassistenza`) REFERENCES `assistenza` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `descrizionepiano`
--
ALTER TABLE `descrizionepiano`
  ADD CONSTRAINT `descrizionepiano_ibfk_1` FOREIGN KEY (`piano`) REFERENCES `pianotariffario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `dispositivicorrelati`
--
ALTER TABLE `dispositivicorrelati`
  ADD CONSTRAINT `dispositivicorrelati_ibfk_1` FOREIGN KEY (`iddispositivo`) REFERENCES `dispositivo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dispositivicorrelati_ibfk_2` FOREIGN KEY (`iddispositivocorrelato`) REFERENCES `dispositivo` (`id`);

--
-- Limiti per la tabella `pianotariffario`
--
ALTER TABLE `pianotariffario`
  ADD CONSTRAINT `pianotariffario_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categoriepiani` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `progettiinevidenza`
--
ALTER TABLE `progettiinevidenza`
  ADD CONSTRAINT `progettiinevidenza_ibfk_1` FOREIGN KEY (`idprogetto`) REFERENCES `progetti` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `relazionepianismartlife`
--
ALTER TABLE `relazionepianismartlife`
  ADD CONSTRAINT `relazionepianismartlife_ibfk_1` FOREIGN KEY (`idpiano`) REFERENCES `pianotariffario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relazionepianismartlife_ibfk_2` FOREIGN KEY (`idsmartlife`) REFERENCES `smartlife` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `smartlife`
--
ALTER TABLE `smartlife`
  ADD CONSTRAINT `smartlife_ibfk_1` FOREIGN KEY (`sottocategoria`) REFERENCES `sottocategoriesmartlife` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `smartlife_ibfk_2` FOREIGN KEY (`categoria`) REFERENCES `categoriesmartlife` (`id`);

--
-- Limiti per la tabella `smartlifedispositivi`
--
ALTER TABLE `smartlifedispositivi`
  ADD CONSTRAINT `smartlifedispositivi_ibfk_1` FOREIGN KEY (`iddispositivo`) REFERENCES `dispositivo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `smartlifedispositivi_ibfk_2` FOREIGN KEY (`idsmartlife`) REFERENCES `smartlife` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `sottocategorieassistenza`
--
ALTER TABLE `sottocategorieassistenza`
  ADD CONSTRAINT `sottocategorieassistenza_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorieassistenza` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `sottocategoriesmartlife`
--
ALTER TABLE `sottocategoriesmartlife`
  ADD CONSTRAINT `sottocategoriesmartlife_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categoriesmartlife` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
