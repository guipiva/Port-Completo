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
          Sou Guilherme Tobias Piva, estudante de Desenvolvimento de Software
          Multiplataforma no 5º semestre pela FATEC. Tenho paixão por tecnologia
          e por transformar ideias em produtos digitais que resolvem problemas
          reais. Ao longo da minha jornada, participei de diversos projetos
          acadêmicos e pessoais que reforçaram minhas habilidades em front-end,
          back-end e na integração com bancos de dados.
        </Text>

        <Text style={styles.text}>
          Busco sempre aplicar boas práticas de desenvolvimento, como organização
          de código, versionamento com Git, e uso de prototipação em Figma quando
          necessário. Também valorizo muito as soft skills: comunicação clara,
          trabalho em equipe e aprendizado contínuo.
        </Text>

        <Text style={styles.text}>
          Me interesso por desenvolvimento mobile com React Native, arquiteturas de
          APIs com Node.js, e otimização de consultas em bancos relacionais e
          não relacionais. Meu objetivo é evoluir para posições de maior
          responsabilidade na área de back-end, contribuindo com soluções
          escaláveis e confiáveis.
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
          Aqui estão alguns dos projetos em que atuei. Cada projeto teve objetivos
          claros: conscientizar sobre o meio ambiente, facilitar doações para
          quem precisa e otimizar a gestão de biodigestores por meio de telas e
          automações que ajudam na tomada de decisão.
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
    { name: 'Node.js', desc: 'Criação de APIs REST.' },
    { name: 'SQL Server', desc: 'Modelagem e otimização de banco de dados.' },
    { name: 'Python', desc: 'Automação e scripts.' },
    { name: 'React Native', desc: 'Aplicações móveis multiplataforma.' },
    { name: 'JavaScript', desc: 'Linguagem principal para web.' },
    { name: 'T-SQL', desc: 'Procedures e consultas avançadas.' },
    { name: 'Git', desc: 'Versionamento de código.' },
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