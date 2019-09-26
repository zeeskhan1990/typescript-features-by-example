import {MatchLoader} from './MatchLoader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchLoader = new MatchLoader(csvFileReader);
matchLoader.load();

//const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = Summary.winsAnalysisWithConsoleReport('Man United')

summary.buildAndPrintReport(matchLoader.matches);
