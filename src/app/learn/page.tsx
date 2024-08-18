import AnswerLabel from "../components/AnswerLabel";
import NavigationButton from "../components/NavigationButton";
import QuestionLabel from "../components/QuestionLabel";

export default function Page() {
  return (
    <div className="flex flex-col gap-4  items-center p-24">
      <QuestionLabel value="Jakie to jest kwalifikowana pierwsza pomoc?" />
      <AnswerLabel asnwerValue="kwalifikowana pierwsza pomoc" />
      <AnswerLabel asnwerValue="kwalifikowana pierwsza pomoc" />
      <AnswerLabel asnwerValue="kwalifikowana pierwsza pomoc" />
      <AnswerLabel asnwerValue="kwalifikowana pierwsza pomoc" />
      <AnswerLabel asnwerValue="kwalifikowana pierwsza pomoc" />
      <NavigationButton value="Następne pytanie" />
    </div>
  );
}
