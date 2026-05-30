import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ===== PALETA MODERNA =====
const colors = {
  bg: '#0F172A',          // Azul grafite profundo
  secondary: '#1E293B',   // Azul acinzentado elegante
  primary: '#10B981',     // Verde esmeralda moderno
  accent: '#22D3EE',      // Ciano suave vibrante
  textPrimary: '#F8FAFC', // Branco suave
  textSecondary: '#94A3B8',
  border: '#334155',
};

// ================= HOME =================
const Home = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.name}>Guilherme Tobias Piva</Text>
        <Text style={styles.subtitle}>
          Desenvolvedor em formação focado em Front-end e Back-end.
        </Text>

        <Pressable onPress={() => Linking.openURL('https://github.com/guipiva')}>
        <Image
          source={require('./assets/imagem-certa.jpeg')}
          style={styles.avatar}
        />
        </Pressable>

        <View style={styles.stats}>
          <Pressable onPress={() => Alert.alert('Semestre', '5º semestre DSM')}>
            <Text style={styles.statNumber}>5º</Text>
            <Text style={styles.statLabel}>Semestre</Text>
          </Pressable>

          <Pressable onPress={() => Alert.alert('Experiência', '+3 anos estudando tecnologia')}>
            <Text style={styles.statNumber}>+3</Text>
            <Text style={styles.statLabel}>Anos</Text>
          </Pressable>

          <Pressable onPress={() => Alert.alert('Stack', 'React, Node, SQL Server, Python, MongoDB, Javascript, Git, C, HTML, CSS')}>
            <Text style={styles.statNumber}>8+</Text>
            <Text style={styles.statLabel}>Skills</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://github.com/guipiva')}
        >
          <Ionicons name="logo-github" size={18} color="#fff" />
          <Text style={styles.buttonText}>Ver GitHub</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
};

// ================= ABOUT =================
const About = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container}>
      <SectionTitle title="Sobre Mim" />

      <View style={styles.card}>
        <Text style={styles.text}>
          Sou Guilherme Tobias Piva, tenho 22 anos e sou estudante de Desenvolvimento de Software Multiplataforma, atualmente cursando o 5º semestre na FATEC. Natural de Sorocaba - SP, sempre fui apaixonado por tecnologia e por sua capacidade de transformar ideias em soluções capazes de impactar positivamente a vida das pessoas. Ao longo da minha trajetória acadêmica e pessoal, participei de diversos projetos que contribuíram para o desenvolvimento das minhas habilidades técnicas, especialmente nas áreas de front-end, back-end e integração com bancos de dados relacionais e não relacionais.
          Meu interesse pela tecnologia começou ainda na infância, impulsionado pelo contato com jogos online e computadores desde os 6 ou 7 anos de idade. Com o passar do tempo, a curiosidade sobre o funcionamento dos sistemas, softwares e aplicações foi crescendo, transformando um simples hobby em uma verdadeira paixão e, posteriormente, em uma escolha profissional. Desde então, venho buscando constantemente novos conhecimentos e acompanhando a evolução do setor para me manter atualizado com as tendências e tecnologias mais relevantes do mercado.
        </Text>

        <Text style={styles.text}>
          Durante minha formação, procurei desenvolver não apenas conhecimentos técnicos, mas também uma visão ampla sobre o processo de desenvolvimento de software. Busco sempre aplicar boas práticas de programação, organização de código, arquitetura de projetos, versionamento utilizando Git e GitHub, além do uso de ferramentas de prototipação e design de interfaces, como o Figma, quando necessário. Acredito que a qualidade de um projeto está diretamente relacionada à atenção aos detalhes, à manutenção do código e à colaboração eficiente entre os membros da equipe.
        </Text>

        <Text style={styles.text}>
          Também valorizo muito as soft skills, entendendo que a comunicação clara, a proatividade, o trabalho em equipe e a capacidade de adaptação são fundamentais para o sucesso de qualquer profissional da área de tecnologia. Tenho facilidade em aprender novas ferramentas e metodologias, além de estar sempre aberto a desafios que contribuam para meu crescimento profissional e pessoal.
        </Text>

        <Info icon="school" title="Formação" text="FATEC - 5º Semestre DSM" />
        <Info icon="briefcase" title="Experiência" text="Projetos acadêmicos e pessoais" />
        <Info icon="target" title="Objetivo" text="Tornar-me Back-end Sênior" />
      </View>

      <Footer />
    </ScrollView>
  );
};

// ================= EXPERIENCE =================
const Experience = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container}>
      <SectionTitle title="Experiência" />

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.text}>
          A seguir, apresento alguns dos projetos em que atuei durante minha formação. Cada um deles foi desenvolvido com objetivos específicos e desafios únicos, proporcionando experiências valiosas tanto do ponto de vista técnico quanto colaborativo. Entre eles, destacam-se iniciativas voltadas à conscientização ambiental, plataformas para facilitar e incentivar doações destinadas a pessoas em situação de vulnerabilidade, além de sistemas para monitoramento e gestão de biodigestores, utilizando dashboards, automações e ferramentas de apoio à tomada de decisão. Esses projetos reforçaram minha capacidade de analisar problemas reais e desenvolver soluções tecnológicas alinhadas às necessidades dos usuários.
        </Text>
      </View>

      <ExperienceCard
        title="Site Informativo sobre a natureza(Eco-Viva)"
        role="Front-end developer"
        period="Fevereiro de 2024 - Junho de 2024"
        bullets={[
          'Objetivo: criar um portal informativo sobre conservação ambiental e práticas sustentáveis, voltado ao público geral e escolas.',
          'Meu papel: desenvolvimento front-end da interface responsiva com HTML, CSS e JavaScript, garantindo leitura acessível e boa experiência em dispositivos móveis.',
          'Resultados: implementação de páginas temáticas, guias educativos e seções interativas; prototipação e iterações em Figma para melhorar usabilidade.',
        ]}
      />

      <ExperienceCard
        title="Site de Doações de alimentos e roupas (Carita)"
        role="Front-end developer e Back-end developer"
        period="Agosto de 2024 - Dezembro de 2025"
        bullets={[
          'Objetivo: facilitar o processo de doação de alimentos e roupas conectando doadores a ONGs e pontos de coleta.',
          'Meu papel: construção das telas de doação, formulários e integração com rotas de API; também atuei na lógica de back-end para registro e consulta de doações.',
          'Resultados: sistema de cadastro de doadores e pedidos, painel administrativo para gerenciamento de doações e integrações com banco SQL Server; colaboração em equipe com Git, GitHub e Trello.',
        ]}
      />

      <ExperienceCard
        title="Site de Gestao de energia gerada por biodigestores (Biogen)"
        role="Front-end developer e Back-end developer"
        period="Fevereiro de 2025 - Dezembro de 2025"
        bullets={[
          'Objetivo: criar uma solução web e mobile para monitorar e otimizar a geração de energia em biodigestores, com foco em coleta de dados e relatórios.',
          'Meu papel: desenvolvimento do front-end em React Native para dispositivos móveis e do back-end para ingestão e sincronização de dados entre bancos locais (SQLite) e remotos (SQL Server / MongoDB).',
          'Resultados: dashboards de monitoramento, relatórios automatizados e alertas; a solução ajudou a identificar ganhos de eficiência e reduzir o tempo de análise manual.',
        ]}
      />

      <Footer />
    </ScrollView>
  );
};

// ================= SKILLS =================
const Skills = () => {
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const skills = [
  { name: 'React', desc: 'Construção de interfaces web modernas.' },
  { name: 'Node.js', desc: 'Criação de APIs REST escaláveis.' },
  { name: 'SQL Server', desc: 'Modelagem e otimização de banco de dados.' },
  { name: 'Python', desc: 'Automação, scripts e manipulação de dados.' },
  { name: 'React Native', desc: 'Desenvolvimento de aplicativos multiplataforma.' },
  { name: 'JavaScript', desc: 'Linguagem principal para desenvolvimento web.' },
  { name: 'TypeScript', desc: 'Desenvolvimento com tipagem estática e maior segurança.' },
  { name: 'Angular', desc: 'Criação de aplicações SPA modernas.' },
  { name: 'HTML5', desc: 'Estruturação semântica de páginas web.' },
  { name: 'CSS3', desc: 'Estilização responsiva e animações.' },
  { name: 'Bootstrap', desc: 'Framework para interfaces responsivas.' },
  { name: 'MongoDB', desc: 'Banco de dados NoSQL orientado a documentos.' },
  { name: 'T-SQL', desc: 'Procedures, triggers e consultas avançadas.' },
  { name: 'Git', desc: 'Controle de versão e gerenciamento de código.' },
  { name: 'GitHub', desc: 'Hospedagem e colaboração em projetos.' },
  { name: 'Express.js', desc: 'Framework para construção de APIs com Node.js.' },
  { name: 'REST API', desc: 'Desenvolvimento e integração de serviços web.' },
  { name: 'Figma', desc: 'Prototipação e design de interfaces.' },
  { name: 'Docker', desc: 'Containerização e padronização de ambientes.' },
  { name: 'MySQL', desc: 'Banco de dados relacional amplamente utilizado.' },
  { name: 'SQLite', desc: 'Banco de dados leve para aplicações locais.' },
  { name: 'JWT', desc: 'Autenticação e autorização baseada em tokens.' },
  { name: 'Postman', desc: 'Testes e documentação de APIs.' },
  { name: 'Scrum', desc: 'Metodologia ágil para desenvolvimento de software.' },
  { name: 'Kanban', desc: 'Gestão visual de tarefas e fluxos de trabalho.' },
  { name: 'JSON', desc: 'Estrutura de troca de dados entre sistemas.' },
  { name: 'Responsive Design', desc: 'Interfaces adaptáveis para diferentes dispositivos.' },
];

  const openSkill = (skill) => {
    setSelected(skill);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <SectionTitle title="Skills" />

      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <Pressable
            key={skill.name}
            style={styles.skill}
            onPress={() => openSkill(skill)}
          >
            <Text style={styles.skillText}>{skill.name}</Text>
          </Pressable>
        ))}
      </View>

      <Footer />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{selected?.name}</Text>
            <Text style={styles.modalText}>{selected?.desc}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// ================= COMPONENTES AUXILIARES =================
const SectionTitle = ({ title }) => {
  const styles = useStyles();
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const ExperienceCard = ({ title, role, period, bullets }) => {
  const styles = useStyles();
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.period}>{period}</Text>
      {bullets.map((b, i) => (
        <Text key={i} style={styles.text}>• {b}</Text>
      ))}
    </View>
  );
};

const Info = ({ icon, title, text }) => {
  const styles = useStyles();
  return (
    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
      <Ionicons name={icon} size={20} color={colors.primary} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>
          {title}
        </Text>
        <Text style={{ color: colors.textSecondary }}>{text}</Text>
      </View>
    </View>
  );
};

const Footer = () => {
  const styles = useStyles();
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2026 Guilherme Piva</Text>
      <TouchableOpacity
        style={styles.contact}
        onPress={() => Linking.openURL('mailto:guilherme@example.com')}
      >
        <Text style={{ color: '#fff' }}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
};

// ================= NAVEGAÇÃO =================
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.bg },
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Experience" component={Experience} />
        <Tab.Screen name="Skills" component={Skills} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ================= ESTILOS =================
const useStyles = () => {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg },
    hero: { alignItems: 'center', padding: 30 },
    name: { fontSize: 36, fontWeight: '900', color: colors.textPrimary },
    subtitle: { color: colors.primary, marginBottom: 20 },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 3,
      borderColor: colors.primary,
      marginBottom: 20,
    },
    stats: { flexDirection: 'row', gap: 30, marginBottom: 20 },
    statNumber: { color: colors.primary, fontWeight: '900', fontSize: 20 },
    statLabel: { color: colors.textSecondary, fontSize: 12 },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonText: { color: '#fff', marginLeft: 8 },
    card: {
      backgroundColor: colors.secondary,
      margin: 20,
      padding: 20,
      borderRadius: 12,
    },
    text: { color: colors.textSecondary, marginBottom: 8 },
    cardTitle: { color: colors.textPrimary, fontWeight: '800', fontSize: 18 },
    role: { color: colors.primary },
    period: { color: colors.textSecondary, marginBottom: 10 },
    sectionTitle: { fontSize: 26, fontWeight: '800', color: colors.textPrimary },
    line: { width: 60, height: 4, backgroundColor: colors.primary, marginTop: 6 },
    skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 20, gap: 10 },
    skill: {
      padding: 10,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 8,
    },
    skillText: { color: colors.primary },
    footer: { alignItems: 'center', padding: 20 },
    footerText: { color: colors.textSecondary },
    contact: {
      marginTop: 10,
      backgroundColor: colors.accent,
      padding: 8,
      borderRadius: 8,
    },
    modalBg: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      backgroundColor: colors.secondary,
      padding: 20,
      borderRadius: 12,
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '800',
      color: colors.textPrimary,
      marginBottom: 10,
    },
    modalText: { color: colors.textSecondary, marginBottom: 15 },
  });
};