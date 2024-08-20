import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
type TabsDemoProps = {
  onTabChange: (value: string) => void;
};
export default function TabsDemo({ onTabChange }: TabsDemoProps) {
  return (
    <div className="mb-4">
      {" "}
      <Tabs
        defaultValue="all"
        className="w-[400px]"
        onValueChange={(value) => onTabChange(value)}
      >
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="light">Light</TabsTrigger>
          <TabsTrigger value="dark">Dark</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
